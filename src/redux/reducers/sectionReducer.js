import { fromJS } from 'immutable';
import { message } from 'antd';

import { sectionActions } from '@redux/actions/sectionActions';

const initState = fromJS({
  section1: null,
  section2: null,
  section3: null
});

const reducer = (state = initState, action) => {
  switch(action.type) {
    case sectionActions.APPEND_SECTION:
      if(!state.get("section1")) {

      }
      else if(!state.get("section2")) {
      }
      else if(!state.get("section3")) {
      }
      else {
        message.error("더 이상 추가할 수 없습니다.");
        return state;
      }
    default:
      return state;
  }
}
export default reducer;