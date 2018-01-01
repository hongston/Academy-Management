import React from 'react';
import { connect } from 'react-redux';

import styles from './LoginLayout.scss';
import Login from '@components/Login/Login';
import { login } from '@redux/actions/workerActions';

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
  _handleLogin(e) {
    e.preventDefault();
    const params = {
      id: this.state.id,
      password: this.state.password
    }
    this.props.login(params);
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
const mapDispatchToProps = (dispatch) => ({
  login: (params) => dispatch(login(params))
})
export default connect(null, mapDispatchToProps)(LoginLayout);