import React from 'react';

import styles from './LoginLayout.scss';
import Login from '@components/Login/Login';

const Container = (props) => <div className={styles.container}>{props.children}</div>;

class LoginLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: ""
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }
  _handleChange(attr, data) {
    this.setState((state, props) => ({      
      [attr]: data
    }), () => console.log(attr, data));
  }
  _handleLogin() {
    // login test
  }
  render() {
    return (
      <Container>
        <Login
          id={this.state.id}
          password={this.state.password}
          onChange={this._handleChange}
          onLogin={this._handleLogin}/>
      </Container>
    );
  }
}
export default LoginLayout;