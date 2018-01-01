import React from 'react';

import * as AWS from '@AWS/AWS';

class Dev extends React.Component {
  constructor() {
    super();
    this.state = {
      signup_id: "",
      signup_pw: "",
      signup_confirm_code: ""
    }
    this._handleSignUp = this._handleSignUp.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleConfirm = this._handleConfirm.bind(this);
  }
  _handleSignUp(e) {
    e.preventDefault();
    AWS.CognitoUserPoolSignUp(this.state.signup_id, this.state.signup_pw, []).then((result) => console.log(result), err => console.log(err));
  }
  _handleChange(attr, data) {
    console.log(attr, data);
    this.setState((state, props) => ({
      [attr]: data
    }))
  }
  _handleConfirm(e) {
    e.preventDefault();
    AWS.CognitoConfirmSignUp(this.state.signup_id, this.state.signup_confirm_code).then((result) => {
      console.log(result);
    }, err => console.log(err));
  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleSignUp}>
          <input type="text" value={this.state.signup_id} onChange={(e) => this._handleChange("signup_id", e.target.value)}/>
          <input type="password" value={this.state.signup_pw} onChange={(e) => this._handleChange("signup_pw", e.target.value)}/>
          <button>가입</button>
        </form>
        <form onSubmit={this._handleConfirm}>
          <input type="text" value={this.state.signup_id} onChange={(e) => this._handleChange("signup_id", e.target.value)}/>
          <input type="text" value={this.state.signup_confirm_code} onChange={(e) => this._handleChange("signup_confirm_code", e.target.value)}/>
          <button>인증</button>
        </form>
      </div>
    )
  }
}
export default Dev;