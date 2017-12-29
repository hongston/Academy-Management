import React from 'react';
import { List } from 'immutable';
import { Input, Icon } from 'antd';
import { Table, Column } from '@components/Table/Table';

import styles from './StudentPart.scss';
const Container = (props) => <div className={styles.container}>{props.children}</div>;
const FontContainer = (props) => <div className={styles.fontContainer}>{props.children}</div>;
const StudentPart = (props) => {
  return (
    <Container>
      <Input
        className={styles.input}
        placeholder="학생 이름"/>
      <Icon className={styles.icon} type="plus-square"/>
      <Table
        headerRowHeight={40}
        rowHeight={30}
        data={List()}>
        <Column 
          widthRatio={2}
          header={<span>#</span>}
          component={({rowData, rowIndex}) => {
            return (
              <Button onClick={()=>props.onModalOpen(rowData)} size="small">상세</Button>
            )
          }}/>
        <Column 
          widthRatio={2}
          header={<span>학생명</span>}
          component={({rowData, rowIndex}) => {
            return (
              <Button onClick={()=>props.onModalOpen(rowData)} size="small">상세</Button>
            )
          }}/>
        <Column 
          widthRatio={2}
          header={<span>학년</span>}
          component={({rowData, rowIndex}) => {
            return (
              <Button onClick={()=>props.onModalOpen(rowData)} size="small">상세</Button>
            )
          }}/>
      </Table>
    </Container>
  )
}

export default StudentPart;