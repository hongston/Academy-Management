import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import TeacherPart from '@components/TeacherPart/TeacherPart';

import styles from './Navigation.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const MenuTitle = (props) => <div className={styles.menuTitle}>{props.text}</div>;



function onClick(e) {
  switch (e.key) {
    case "teacher:1" :  <TeacherPart/>  // 모달을 visible하고 싶은데, 다른 클래스를 어떻게 접근 해야 할지 모르겠다.ㅠ
        break;
    default :  alert("click");
  }
}


const Navigation = (props) => {


  const StudentMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="student:1">학생정보</Menu.Item>
      <Menu.Item key="student:2">수강강좌</Menu.Item>
      <Menu.Item key="student:3">수납이력</Menu.Item>
      <Menu.Item key="student:4">출결상황</Menu.Item>
      <Menu.Item key="student:5">상담기록</Menu.Item>
      <Menu.Item key="student:6">테스트결과</Menu.Item>
    </Menu>
  );
  const ClassBookMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="classbook:1">정규강좌</Menu.Item>
      <Menu.Item key="classbook:2">특강강좌</Menu.Item>
      <Menu.Item key="classbook:3">클리닉강좌</Menu.Item>
      <Menu.Item key="classbook:4">보강강좌</Menu.Item>
      <Menu.Item key="classbook:5">강사별강좌</Menu.Item>
      <Menu.Item key="classbook:6">강의교재</Menu.Item>
      <Menu.Item key="classbook:7">강좌정보</Menu.Item>
    </Menu>
  );
  const LessonMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="lesson:1">출결</Menu.Item>
      <Menu.Item key="lesson:2">상담</Menu.Item>
      <Menu.Item key="lesson:3">테스트</Menu.Item>
      <Menu.Item key="lesson:4">진도</Menu.Item>
      <Menu.Item key="lesson:5">결석생</Menu.Item>
      <Menu.Item key="lesson:6">휴원생</Menu.Item>
    </Menu>
  );
  const PayMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="pay:1">수강료</Menu.Item>
      <Menu.Item key="pay:2">교재</Menu.Item>
      <Menu.Item key="pay:3">월별</Menu.Item>
      <Menu.Item key="pay:4">강좌별</Menu.Item>
      <Menu.Item key="pay:5">지출</Menu.Item>
    </Menu>
  );
  const TestMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="test:1">날짜별</Menu.Item>
      <Menu.Item key="test:2">학생별</Menu.Item>
      <Menu.Item key="test:3">강좌별</Menu.Item>
      <Menu.Item key="test:4">강사별</Menu.Item>
      <Menu.Item key="test:5">신규생</Menu.Item>
    </Menu>
  );
  const AccountMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="account:1">일별</Menu.Item>
      <Menu.Item key="account:2">월별</Menu.Item>
      <Menu.Item key="account:3">기간별</Menu.Item>
      <Menu.Item key="account:4">강좌별</Menu.Item>
      <Menu.Item key="account:5">강사별</Menu.Item>
      <Menu.Item key="account:6">학년별</Menu.Item>
    </Menu>
  );
  const TeacherMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="teacher:1">강사정보</Menu.Item>
      <Menu.Item key="teacher:2">상담</Menu.Item>
      <Menu.Item key="teacher:3">테스트</Menu.Item>
      <Menu.Item key="teacher:4">강좌</Menu.Item>
    </Menu>
  );

  const SystemMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="system:1">진도설정</Menu.Item>
      <Menu.Item key="system:2">카드은행</Menu.Item>
      <Menu.Item key="system:3">지출항목</Menu.Item>
      <Menu.Item key="system:4">수납청구</Menu.Item>
      <Menu.Item key="system:5">전달사항</Menu.Item>
      <Menu.Item key="system:6">사용자권한</Menu.Item>
      <Menu.Item key="system:7">일정관리</Menu.Item>
      <Menu.Item key="system:8">학년변경</Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Dropdown overlay={<StudentMenu/>}>
        <span className={styles.menuTitle}>학생관리</span>
      </Dropdown>
      <Dropdown overlay={<ClassBookMenu/>}>
        <span className={styles.menuTitle}>강좌관리</span>
      </Dropdown>
      <Dropdown overlay={<LessonMenu/>}>
        <span className={styles.menuTitle}>수업관리</span>
      </Dropdown>
      <Dropdown overlay={<PayMenu/>}>
        <span className={styles.menuTitle}>수납관리</span>
      </Dropdown>
      <Dropdown overlay={<TestMenu/>}>
        <span className={styles.menuTitle}>테스트관리</span>
      </Dropdown>
      <Dropdown overlay={<TeacherMenu/>}>
        <span className={styles.menuTitle}>강사관리</span>
      </Dropdown>
      <Dropdown overlay={<AccountMenu/>}>
        <span className={styles.menuTitle}>회계관리</span>
      </Dropdown>
      <Dropdown overlay={<SystemMenu/>}>
        <span className={styles.menuTitle}>시스템관리</span>
      </Dropdown>
    </Container>
  )
}

export default Navigation;