import AWS from 'aws-sdk';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser,AuthenticationDetails } from 'amazon-cognito-identity-js';

import * as AWS_CONFIG from './AWS_CONFIG';

export const userPool = new CognitoUserPool({
  UserPoolId : AWS_CONFIG.USER_POOL_ID,
  ClientId : AWS_CONFIG.CLIENT_ID
});
AWS.config.region = AWS_CONFIG.REGION;
AWS.config.apiVersions = {
  dynamodb : '2012-08-10'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function : Register a user to Coginto UserPool
// attributes = [{
//   Name : "custom:companyId",
//   Value : "ticketsolution"
// }]
export function CognitoUserPoolSignUp(loginEmail, loginPW, attributes) {
  return new Promise( (resolve, reject)=> {
		const CognitoAttributes = attributes.map( (attribute)=> {
			return new CognitoUserAttribute(attribute);
		})
		userPool.signUp(loginEmail, loginPW, CognitoAttributes, null, (err, result) => {
			if(err) {
				reject(err);
			}
			else {
        resolve(result);
      }
		});
	});
}
// Email Authentication
export function CognitoConfirmSignUp(email, confirmationCode) {
	const user = new CognitoUser({
		Username: email,
		Pool: userPool
  })
  return new Promise( (resolve, reject) => {
    user.confirmRegistration(confirmationCode, true, (err,data) => {
      if(err){
        reject(err);
      }
      else {
        resolve(data);
      }
    })  
  })
}
// Function : Save CognitoUserSession(AccessToken, IdToken, RefeshToken) in Local Storage
export function CognitoUserPoolSignIn(loginID, loginPW) { // Login ID, Login PW used for signing in UserPool
  const loginInfo = new AuthenticationDetails({
    Username : loginID,
    Password : loginPW
  });
  const user = new CognitoUser({
    Username : loginID,
    Pool : userPool
  });
  /*--------------------------------------------------------------------------------------*/
  // Authenticate the user with its loginID, loginPW
  // result : class CognitoUserSession
  // method
  // - getIdToken()
  // - getRefreshToken() : Get new IdToken, AccessToken from Cognito
  // - getAccessToken() : The primary purpose of the access token is to authorize operations in the context of the user in the user pool. For example, you can use the access token against Amazon Cognito Identity to update or delete user attributes
  // - isValid()        
  return new Promise( (resolve, reject)=> {
      user.authenticateUser(loginInfo, {
        onSuccess : (result) => {
					CognitoSetupUserCredential(result.getIdToken().getJwtToken()).then(resolve);
        },
        onFailure : (err) => reject(err)
      })
  });
  /*--------------------------------------------------------------------------------------*/
}