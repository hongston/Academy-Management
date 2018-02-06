import React from 'react';
import { AutoComplete } from 'antd';

const EmailOption = AutoComplete.Option;

class EmailText extends React.Component {
  state = {
    result: [],
  }

  _handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', 'hanmail.net', 'naver.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    const children = result.map((email) => {
      return <EmailOption key={email}>{email}</EmailOption>;
    });
    return (
      <AutoComplete
        style={{width : this.props.width}}
        onSearch={this._handleSearch}
        placeholder={this.props.placeholder}
      >
        {children}
      </AutoComplete>
    );
  }
}

export default EmailText;