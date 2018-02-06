import { Map } from 'immutable';
import { message } from 'antd';

import { sectionActions } from '@redux/actions/sectionActions';

let _isExist = Map();
const initState = Map({
  section1: null,
  section2: null,
  section3: null
});

const reducer = (state = initState, action) => {
  switch(action.type) {
    case sectionActions.APPEND_SECTION:
      const data = Map({
        sectionName: action.sectionName,
        component: action.component
      })
      if(!_isExist.get(action.sectionName)) {
        _isExist = _isExist.set(action.sectionName, true);
        if(!state.get("section1")) {
          return state.set("section1", data);
        }
        else if(!state.get("section2")) {
          return state.set("section2", data);
        }
        else if(!state.get("section3")) {
          return state.set("section3", data);
        }
        else {
          message.error("더 이상 추가할 수 없습니다.");
          return state;
        }
      }
      else {
        message.error("이미 존재하는 메뉴입니다");
        return state;
      }
    case sectionActions.DELETE_SECTION:
      _isExist = _isExist.delete(action.sectionName);
      if(state.getIn(["section1", "sectionName"])===action.sectionName) {
        return state.set("section1", null);
      }
      else if(state.getIn(["section2", "sectionName"])===action.sectionName) {
        return state.set("section2", null);
      }
      else if(state.getIn(["section3", "sectionName"])===action.sectionName) {
        return state.set("section3", null);
      }
    default:
      return state;
  }
}
export default reducer;