import React from 'react';
import { List } from 'immutable';
import { Input, Icon } from 'antd';
import { Table, Column } from '@components/Table/Table';

import styles from './TeacherPart.scss';
const Container = (props) => <div className={styles.container}>{props.children}</div>;
const TeacherPart = (props) => {
  const columns = [{
    key: 1,
    title: "#"
  }, {
    key: 2,
    title: "강사명"
  }];
  return (
    <Container>
      <Input
        className={styles.input}
        placeholder="강사 이름"/>
      <Icon
        className={styles.icon}
        type="plus-square"/>
      <Table
        headerRowHeight={40}
        rowHeight={30}
        data={List()}>
        <Column 
          widthRatio={2}
          header={<span>#</span>}
          component={({rowData, rowIndex}) => {
            return (
              <span>{rowIndex}</span>
            )
          }}/>
        <Column 
          widthRatio={2}
          header={<span>강사명</span>}
          component={({rowData, rowIndex}) => {
            return (
              <Button onClick={()=>props.onModalOpen(rowData)} size="small">상세</Button>
            )
          }}/>
      </Table>
    </Container>
  )
}

export default TeacherPart;