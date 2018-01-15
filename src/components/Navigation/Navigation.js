import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import styles from './Navigation.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const MenuTitle = (props) => <div className={styles.menuTitle}>{props.text}</div>;
function onClick() {
  alert("click");
}
const Navigation = (props) => {
  const StudentMenu = () => (
    <Menu onClick={onClick}>
      <Menu.Item key="setting:1">Option 1</Menu.Item>
      <Menu.Item key="setting:2">Option 2</Menu.Item>
      <Menu.Item key="setting:3">Option 3</Menu.Item>
      <Menu.Item key="setting:4">Option 4</Menu.Item>
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
      <Dropdown overlay={<StudentMenu/>}>
        <span className={styles.menuTitle}>강좌관리</span>
      </Dropdown>
      <Dropdown overlay={<StudentMenu/>}>
        <span className={styles.menuTitle}>수납관리</span>
      </Dropdown>
      <Dropdown overlay={<StudentMenu/>}>
        <span className={styles.menuTitle}>선생관리</span>
      </Dropdown>
      <Dropdown overlay={<StudentMenu/>}>
        <span className={styles.menuTitle}>회계관리</span>
      </Dropdown>
    </Container>
  )
}

export default Navigation;