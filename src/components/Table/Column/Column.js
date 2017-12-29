import React from 'react';
import { Map } from 'immutable';

import styles from './Column.scss';
import { Cell } from '../Cell/Cell';

const UserContainer = (props) => (
  <div style={props.style}>
    {props.children}
  </div>
);
export const Column = (props) => {
  const UserComponent = props.component;
  const ExpendedComponent = props.expendedComponent || (() => null);

  const rows = props.rowData ?
    props.rowData.get("category")
    ? props.rowData.get("category").size
    : 1
  : 1;
  let preCellStyle = props.style.set("flex", props.widthRatio).set("lineHeight", props.style.get("lineHeight")+'px');
  if(props.isExpanded) {
    preCellStyle = preCellStyle.set("height",props.style.get("height") * rows);
  }
  const cellStyle = preCellStyle.toJS();
  const userContainerStyle = props.isExpanded
  ? props.isDivided
    ? props.style.set("lineHeight", props.style.get("lineHeight") + 'px').toJS()
    : props.style.set("lineHeight", props.style.get("lineHeight") * rows + 'px').toJS()
  : props.style.set("lineHeight", props.style.get("lineHeight") + 'px').toJS();
  return (
    <Cell style={cellStyle}>
      <UserContainer style={userContainerStyle}>
        <UserComponent
          rowData={props.rowData}
          rowIndex={props.rowIndex}
          onClick={props.onClick}
          isExpanded={props.isExpanded}
        />
      </UserContainer>
      {props.isExpanded
        ? <ExpendedComponent 
            rowData={props.rowData}
            rowIndex={props.rowIndex}/> 
        : null}
    </Cell>
  );
}

  // cellStyle = {
  //   height: 30,`
  //   lineHeight: 30px,
  //   flex: 3
  // }
