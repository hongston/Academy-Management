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
