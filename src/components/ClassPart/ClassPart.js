import React from 'react';
import { List } from 'immutable';
import { Input, Icon, Modal, Button } from 'antd';
import { Table, Column } from '@components/Table/Table';

import styles from './ClassPart.scss';
const Container = (props) => <div className={styles.container}>{props.children}</div>;
const ClassPart = (props) => {
  return (
    <Container>
      <Input
        className={styles.input}
        placeholder="강의 이름"/>
      <Icon
        className={styles.icon}
        type="plus-square"
        onClick={() => props.onUpdateState("classInfo", ["modalVisible"], true)}/>
      <Modal
        title="강의등록"
        visible={props.classInfo.get("modalVisible")}
        footer={[
          <Button key="register" type="primary" onClick={props.onRegisterClass}>등록</Button>,
          <Button key="cancel" onClick={() => props.onUpdateState("classInfo", ["modalVisible"], false)}>취소</Button>
        ]}>
        sdfsdfsdf
      </Modal>        
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
          header={<span>강의명</span>}
          component={({rowData, rowIndex}) => {
            return (
              <Button onClick={()=>props.onModalOpen(rowData)} size="small">상세</Button>
            )
          }}/>
      </Table>
    </Container>
  )
}

export default ClassPart;