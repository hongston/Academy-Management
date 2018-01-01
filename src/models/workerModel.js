import AWS from '@AWS/AWS';

// params = {
//   id: "",
//   password: ""
// }
export function login(params) {
  return new Promise((resolve, reject) => {
    AWS.CognitoUserPoolSignIn(params.id, params.password).then(resolve, reject);
  })
}