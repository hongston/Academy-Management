import React from 'react';

import * as AWS from '@AWS/AWS';

class Dev extends React.Component {
  compoentWillMount() {
    AWS.CognitoUserPoolSignUp("sungwon520@gmail.com", "123123", [{
      Name: "custom:user_id",
      Value: "1"
    }]).then((result) => console.log(result), err => console.log(err));
  }
  render() {
    return (
      <div>FOR DEV</div>
    )
  }
}
export default Dev;