import React from 'react';
import moment from 'moment';
import { List } from 'immutable';
import { Input, Icon, Modal, Button, Select, InputNumber, DatePicker } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;
import { Table, Column } from '@components/Table/Table';

import styles from './ClassPart.scss';
const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Form = (props) => <div className={styles.form}>{props.children}</div>;
const FormItem = (props) => <div className={styles.formItem}>{props.children}</div>;
const Text = (props) => <div className={styles.text}>{props.children}</div>;
const InputContainer = (props) => <div className={styles.inputContainer}>{props.children}</div>;
const LectureTimeContainer = (props) => <div className={styles.lectureTimeContainer}>{props.children}</div>;
const ClassPart = (props) => {
  const lectureTimes = props.classInfo.get("lectureTime").map((item, index) => {
    return (
      <LectureTimeContainer>
        <Select className={styles.daySelect} placeholder="요일">
          <Option value="monday">월</Option>
          <Option value="tuesday">화</Option>
          <Option value="thursday">수</Option>
          <Option value="wednesday">목</Option>
          <Option value="friday">금</Option>
          <Option value="saturday">토</Option>
          <Option value="sunday">일</Option>
        </Select>
        <Input className={styles.timeInput} placeholder="시작시간"/>
        <Input className={styles.timeInput} placeholder="종료시간"/>
        <Icon
          type="minus-circle-o"
          onClick={() => props.onUpdateLectureTime({
            mode: "delete",
            index
          })}
          className={styles.minusIcon}/>
      </LectureTimeContainer>
    );
  })
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
        closable={false}
        footer={[
          <Button key="register" type="primary" onClick={props.onRegisterClass}>등록</Button>,
          <Button key="cancel" onClick={() => props.onUpdateState("classInfo", ["modalVisible"], false)}>취소</Button>
        ]}>
        <Form>
          <FormItem>
            <Text>강의명</Text>
            <InputContainer>
              <InputGroup compact>
                <Select className={styles.subjectSelect} placeholder="과목">
                  <Option value="math">수학</Option>
                  <Option value="english">영어</Option>
                </Select>
                <Input
                  className={styles.lectureName}
                  placeholder="강의명을 입력하세요."/>
              </InputGroup>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>강의유형</Text>
            <InputContainer>
              <Select defaultValue="regular" className={styles.lectureTypeSelect}>
                <Option value="regular">정규(특강)</Option>
                <Option value="special">단과(종합)</Option>
              </Select>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>강사</Text>
            <InputContainer>
              <Select className={styles.lectureTypeSelect} placeholder="강사를 선택하세요.">
                <Option value="0">홍석기</Option>
                <Option value="1">김혜진</Option>
              </Select>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>진도</Text>
            <InputContainer>
              <Input />
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>수강료</Text>
            <InputContainer>
              <InputNumber
                className={styles.payment}
                formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\₩\s?|(,*)/g, '')}
                onChange={(value) => console.log("changed value", value)}/>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>교재</Text>
            <InputContainer>
              <Select className={styles.lectureTypeSelect} placeholder="교재를 선택해주세요.">
                <Option value="0">없음</Option>
                <Option value="1">유맛</Option>
                <Option value="2">기맛</Option>
              </Select>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>강의기간</Text>
            <InputContainer>
              <RangePicker
                className={styles.lectureValidDatePicker}
                value={[moment(), moment().add(1, 'month')]}
                format={"YYYY-MM-DD"}/>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>강의등록일</Text>
            <InputContainer>
              <DatePicker defaultValue={moment()} format={'YYYY-MM-DD'}/>
            </InputContainer>
          </FormItem>
          <FormItem>
            <Text>강의시간</Text>
            <InputContainer>
              {lectureTimes}
              <Button
                type="dashed"
                className={styles.lectureAddBtn}
                onClick={() => props.onUpdateLectureTime({mode: "add"})}>
                <Icon type="plus" /> 강의시간 추가
              </Button>
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