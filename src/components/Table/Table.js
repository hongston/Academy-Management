import React from 'react';
import { Map } from 'immutable';
import uuid4 from 'uuid/v4';

import { Cell } from './Cell/Cell';
import { Row } from './Row/Row';
import { Column } from './Column/Column';
import styles from './Table.scss';
import Pagination from './Pagination/Pagination';

const Container = (props) => <div className={styles.container}>{props.children}</div>
const TableContainer = (props) => <div className={styles.tableContainer}>{props.children}</div>;
export class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: Map()
    };
    this._handleRowClick = this._handleRowClick.bind(this);
  }
  _handleRowClick(index) {
    this.setState((state,props) => {
      let { isExpanded } = state;
      if(isExpanded.get(index)) return {isExpanded: isExpanded.delete(index)};
      else return {isExpanded: isExpanded.set(index,true)}
    })
  }
  render() {
    const rows = this.props.data.size || this.props.data.length;
    const Header = () => {
      const headerStyle = Map({
        height: this.props.headerRowHeight,
        lineHeight: this.props.headerRowHeight
      })
      let columns = [];
      let _colIndex = 0;
      this.props.children.map((column, columnIndex) => {
        if(Array.isArray(column)) {
          column.map((_column, index) => {
            const HeaderComponent = () => _column.props.header?_column.props.header:null;
            const columnProps = {
              key: uuid4(),
              component: HeaderComponent,
              widthRatio: _column.props.widthRatio,
              style: headerStyle
            }
            columns.push(React.cloneElement(<Column />, columnProps));              
          })
        }
        else {
          const HeaderComponent = () => column.props.header?column.props.header:null;
          const columnProps = {
            key: uuid4(),
            component: HeaderComponent,
            widthRatio: column.props.widthRatio,
            style: headerStyle
          }
          columns.push(React.cloneElement(<Column />, columnProps));
        }
      });
      return <Row>{columns}</Row>;
    }
    const Content = () => {
      const cellStyle = Map({
        height: this.props.rowHeight,
        lineHeight: this.props.rowHeight
      });
      const rows = this.props.tableInfo ? (
      this.props.tableInfo.get("currentPage")
        ? this.props.data.slice((this.props.tableInfo.get("currentPage")-1)*10, this.props.tableInfo.get("currentPage")*10)
        : this.props.data
      ) : (
        this.props.data
      )
      
      const contents = rows.map((rowData, rowIndex) => {
        let _colIndex = 0;
        let columnsWithProps = [];
        React.Children.map(this.props.children, (column, columnIndex) => {
          if(Array.isArray(column)){
            column.map((_column, index) => {
              const columnProps = {
                key: uuid4(),
                rowIndex: rowIndex,
                columnIndex: _colIndex++,
                rowData: rowData,
                style: cellStyle,
                isExpanded: this.state.isExpanded.get(rowIndex)?true:false
              };
              if(columnIndex==0) columnProps.onClick = () => this._handleRowClick(rowIndex);            
              const Column = React.cloneElement(_column, columnProps);
              columnsWithProps.push(Column);                
            })
          }
          else {
            const columnProps = {
              key: uuid4(),
              rowIndex: rowIndex,
              columnIndex: _colIndex++,
              rowData: rowData,
              style: cellStyle,
              isExpanded: this.state.isExpanded.get(rowIndex)?true:false
            };
            if(columnIndex==0) columnProps.onClick = () => this._handleRowClick(rowIndex);            
            const Column = React.cloneElement(column, columnProps);
            columnsWithProps.push(Column);
          }
        });
        return <Row key={rowIndex}>{columnsWithProps}</Row>;
      });
      return <div style={this.props.contentStyle}>{contents}</div>;
    };  
    return (
      <Container>
        <TableContainer>
          <Header />
          <Content />
        </TableContainer>        
        <Pagination
          visible={this.props.pagination}
          tableInfo={this.props.tableInfo}
          onChangeCurrentPage={this.props.onChangeCurrentPage}
          onNextPageClick={this.props.onNextPageClick}
          onPreviousPageClick={this.props.onPreviousPageClick}/>
      </Container>
    );
  }
}
export { Column } from './Column/Column';
/*
props = {
  pagination: true | false,
  onPageUpdate
}
*/
