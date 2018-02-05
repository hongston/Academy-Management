import React from 'react';
import { List } from 'immutable';
import { Input, Icon, Modal, Button, DatePicker, Select,  AutoComplete } from 'antd';
const Option = Select.Option;
import { Table, Column } from '@components/Table/Table';
import moment from 'moment';

import styles from './TeacherPart.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Form = (props) => <div className={styles.form}>{props.children}</div>;
const FormItem = (props) => <div className={styles.formItem}>{props.children}</div>;
const Text = (props) => <div className={styles.text}>{props.children}</div>;
const InputContainer = (props) => <div className={styles.inputContainer}>{props.children}</div>;
const TeacherPart = (props) => {
  return (
    <Container>
      <Modal
        title="강사등록"
        visible={props.teacherInfo.get("modalVisible")}
        closable={false}
        footer={[
          <Button key="register" type="primary" onClick={props.onRegisterTeacher}>등록</Button>,
          <Button key="cancel" onClick={() => props.onUpdateState("teacherInfo", ["modalVisible"], false)}>취소</Button>
        ]}>
        <Form>
          <FormItem>
            <Text>이름</Text>
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
            <Text>연락처</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>이메일</Text>
            <InputContainer>
              <Complete />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>입사일</Text>
            <InputContainer>
              <DatePicker defaultValue={moment()} format={'YYYY-MM-DD'}/>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>추가연락처</Text>
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
          <FormItem>
            <Text>주소</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>직위</Text>
            <InputContainer>
              <Select defaultValue="0" className={styles.teacherStateSelect}>
                <Option value="0">전임강사</Option>
                <Option value="1">파트강사</Option>
                <Option value="2">팀장</Option>
                <Option value="3">부원장</Option>
                <Option value="4">원장</Option>
              </Select>
            </InputContainer>
          </FormItem>
        </Form>
      </Modal>
    </Container>
  )
}


export default TeacherPart;