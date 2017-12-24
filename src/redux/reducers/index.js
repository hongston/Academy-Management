import { combineReducers } from 'redux';

import userReducer from './userReducer';

export default combineReducers({
  // navigation: navigationReducer,
  // tab: tabReducer,
  // prod: prodReducer,
  // order: orderReducer,
  // seller: sellerReducer,
  // work: workReducer,
  // setting: settingReducer,
  user: userReducer
  // company: companyReducer,
  // use: useReducer,
  // inquiry: inquiryReducer
});