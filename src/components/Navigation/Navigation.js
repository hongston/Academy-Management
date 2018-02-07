import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import TeacherPart from '@components/TeacherPart/TeacherPart';

import styles from './Navigation.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const MenuTitle = (props) => <div className={styles.menuTitle}>{props.text}</div>;

const StudentMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="학생정보">학생정보</Menu.Item>
    <Menu.Item key="수강강좌">수강강좌</Menu.Item>
    <Menu.Item key="수납이력">수납이력</Menu.Item>
    <Menu.Item key="출결상황">출결상황</Menu.Item>
    <Menu.Item key="상담기록">상담기록</Menu.Item>
    <Menu.Item key="테스트결과">테스트결과</Menu.Item>
  </Menu>
);
const ClassBookMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="정규강좌">정규강좌</Menu.Item>
    <Menu.Item key="특강강좌">특강강좌</Menu.Item>
    <Menu.Item key="클리닉강좌">클리닉강좌</Menu.Item>
    <Menu.Item key="보강강좌">보강강좌</Menu.Item>
    <Menu.Item key="강사별강좌">강사별강좌</Menu.Item>
    <Menu.Item key="강의교재">강의교재</Menu.Item>
    <Menu.Item key="강좌정보">강좌정보</Menu.Item>
  </Menu>
);
const LessonMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="출결">출결</Menu.Item>
    <Menu.Item key="상담">상담</Menu.Item>
    <Menu.Item key="테스트">테스트</Menu.Item>
    <Menu.Item key="진도">진도</Menu.Item>
    <Menu.Item key="숙제">숙제</Menu.Item>   
    <Menu.Item key="결석생">결석생</Menu.Item>
    <Menu.Item key="휴원생">휴원생</Menu.Item>
  </Menu>
);
const PayMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="수강료">수강료</Menu.Item>
    <Menu.Item key="교재">교재</Menu.Item>
    <Menu.Item key="월별수납">월별</Menu.Item>
    <Menu.Item key="강좌별">강좌별</Menu.Item>
    <Menu.Item key="지출">지출</Menu.Item>
  </Menu>
);
const TestMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="날짜별">날짜별</Menu.Item>
    <Menu.Item key="학생별">학생별</Menu.Item>
    <Menu.Item key="강좌별">강좌별</Menu.Item>
    <Menu.Item key="강사별">강사별</Menu.Item>
    <Menu.Item key="신규생">신규생</Menu.Item>
  </Menu>
);
const AccountingMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="일별">일별</Menu.Item>
    <Menu.Item key="월별">월별</Menu.Item>
    <Menu.Item key="기간별">기간별</Menu.Item>
    <Menu.Item key="강좌별회계">강좌별</Menu.Item>
    <Menu.Item key="강사별">강사별</Menu.Item>
    <Menu.Item key="학년별">학년별</Menu.Item>
  </Menu>
);
const TeacherMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="강사정보">강사정보</Menu.Item>
    <Menu.Item key="상담">상담</Menu.Item>
    <Menu.Item key="강사테스트">테스트</Menu.Item>
    <Menu.Item key="강좌">강좌</Menu.Item>
  </Menu>
);
const SystemMenu = (props) => (
  <Menu onClick={props.onMenuClick}>
    <Menu.Item key="진도설정">진도설정</Menu.Item>
    <Menu.Item key="카드은행">카드은행</Menu.Item>
    <Menu.Item key="지출항목">지출항목</Menu.Item>
    <Menu.Item key="수납청구">수납청구</Menu.Item>
    <Menu.Item key="전달사항">전달사항</Menu.Item>
    <Menu.Item key="사용자권한">사용자권한</Menu.Item>
    <Menu.Item key="일정관리">일정관리</Menu.Item>
    <Menu.Item key="학년변경">학년변경</Menu.Item>
  </Menu>
);
const Navigation = (props) => {
  return (
    <Container>
      <Dropdown overlay={<StudentMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>학생관리</span>
      </Dropdown>
      <Dropdown overlay={<ClassBookMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>강좌관리</span>
      </Dropdown>
      <Dropdown overlay={<LessonMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>수업관리</span>
      </Dropdown>
      <Dropdown overlay={<PayMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>수납관리</span>
      </Dropdown>
      <Dropdown overlay={<TestMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>테스트관리</span>
      </Dropdown>
      <Dropdown overlay={<TeacherMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>강사관리</span>
      </Dropdown>
      <Dropdown overlay={<AccountingMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>회계관리</span>
      </Dropdown>
      <Dropdown overlay={<SystemMenu onMenuClick={props.onMenuClick}/>}>
        <span className={styles.menuTitle}>시스템관리</span>
      </Dropdown>
    </Container>
  )
}

export default Navigation;