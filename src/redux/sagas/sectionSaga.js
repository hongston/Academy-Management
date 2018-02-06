import React from 'react';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { sectionSagaActions, sectionActions } from '@redux/actions/sectionActions';

import StudentInfo from '@containers/StudentInfo/StudentInfo';

const Components = {
  "학생정보": <StudentInfo />,
  "수강강좌": <div>수강강좌</div>,
  "수납이력": <div>수납이력</div>,
  "출결상황": <div>출결상황</div>,
  "테스트결과": <div>테스트결과</div>,
  "정규강좌": <div>정규강좌</div>,
  "특강강좌": <div>특강강좌</div>,
  "클리닉강좌": <div>클리닉강좌</div>,
  "보강강좌": <div>보강강좌</div>,
  "강사별강좌": <div>강사별강좌</div>,
  "상담기록": <div>수강강좌</div>,
  "강의교재": <div>강의교재</div>,
  "강좌정보": <div>강좌정보</div>,
  "출결": <div>출결</div>,
  "상담": <div>상담</div>,
  "테스트": <div>테스트</div>,
  "진도": <div>진도</div>,
  "결석생": <div>결석생</div>,
  "휴원생": <div>휴원생</div>,
  "수강료": <div>수강료</div>,
  "교재": <div>교재</div>,
  "월별수납": <div>월별</div>,
  "강좌별": <div>강좌별</div>,
  "지출": <div>지출</div>,
  "날짜별": <div>날짜별</div>,
  "학생별": <div>학생별</div>,
  "강좌별": <div>강좌별</div>,
  "강사별": <div>강사별</div>,
  "신규생": <div>신규생</div>,
  "일별": <div>일별</div>,
  "월별": <div>월별</div>,
  "강좌별회계": <div>회계</div>,
  "강사별": <div>강사별</div>,
  "학년별": <div>학년별</div>,
  "강사정보": <div>강사정보</div>,
  "상담": <div>상담</div>,
  "강사테스트": <div>테스트</div>,
  "강좌": <div>강좌</div>,
  "진도설정": <div>진도설정</div>,
  "지출항목": <div>지출항목</div>,
  "수납청구": <div>수납청구</div>,
  "전달사항": <div>전달사항</div>,
  "사용자권한": <div>사용자권한</div>,
  "일정관리": <div>일정관리</div>,
  "학년변경": <div>학년변경</div>
}
function* AppendSection(action) {
  const { sectionName } = action;
  yield put({
    type: sectionActions.APPEND_SECTION,
    sectionName,
    component: Components[sectionName]
  })
}
export function* preAppendSection() {
  yield takeEvery(sectionSagaActions.APPEND_SECTION, AppendSection);
}