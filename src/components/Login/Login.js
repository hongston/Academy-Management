import React from 'react';
import { Input } from 'antd';

import styles from './Login.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;

const LoginForm = (props) => {
  return (
    <div className={styles.loginForm}>
      <form onSubmit={props.onLogin}>
        {props.children}
      </form>
    </div>
  )
}
const ID = (props) => {
  return (
    <div className={styles.inputContainer}>
      <Input placeholder="ID" value={props.id} onChange={(e) => props.onChange("id", e.target.value)}/>
    </div>
  )
}
const PW = (props) => {
  return ( 
    <div className={styles.inputContainer}>
      <Input type="password" placeholder="PASSWORD" value={props.password} onChange={(e) => props.onChange("password", e.target.value)}/>
    </div>
  )
}
const LoginBtn = (props) => {
  return (
    <button
      className={styles.loginBtn}
      onClick={props.onLogin}>
      로그인
    </button>
  )
}
const Login = (props) => (
  <Container>
    <LoginForm>
      <ID id={props.id} onChange={props.onChange}/>
      <PW password={props.password} onChange={props.onChange}/>
      <LoginBtn />
    </LoginForm>
  </Container>
)

export default Login;