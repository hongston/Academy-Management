import React from 'react';
import { List } from 'immutable';
import { Input, Icon, Modal, Button, DatePicker } from 'antd';
import { Table, Column } from '@components/Table/Table';
import moment from 'moment';

import styles from './StudentPart.scss';
const Container = (props) => <div className={styles.container}>{props.children}</div>;
const FontContainer = (props) => <div className={styles.fontContainer}>{props.children}</div>;
const Form = (props) => <div className={styles.form}>{props.children}</div>;
const FormItem = (props) => <div className={styles.formItem}>{props.children}</div>;
const Text = (props) => <div className={styles.text}>{props.children}</div>;
const InputContainer = (props) => <div className={styles.inputContainer}>{props.children}</div>;
const StudentPart = (props) => {
  return (
    <Container>
      <Input
        className={styles.input}
        placeholder="학생 이름"/>
      <Icon
        className={styles.icon}
        type="plus-square"
        onClick={() => props.onUpdateState("studentInfo", ["modalVisible"], true)}/>
      <Modal
        title="학생등록"
        visible={props.studentInfo.get("modalVisible")}
        footer={[
          <Button key="register" type="primary" onClick={props.onRegisterStudent}>등록</Button>,
          <Button key="cancel" onClick={() => props.onUpdateState("studentInfo", ["modalVisible"], false)}>취소</Button>
        ]}>
        <Form>
          <FormItem>
            <Text>이름</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>학부모</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>학부모번호</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>학년</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>학교</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>학생번호</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>생년월일</Text>
            <InputContainer>
              <Input className={styles.birthYear} placeholder="년"/>
              <Input className={styles.birthMonth} placeholder="월"/>
              <Input className={styles.birthDay} placeholder="일"/>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>상태</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>등록일</Text>
            <InputContainer>
              <DatePicker defaultValue={moment()} format={'YYYY-MM-DD'}/>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>수납상태</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>추가연락처</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>재원형제</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>특이사항</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
        </Form>
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