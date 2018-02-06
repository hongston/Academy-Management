export const sectionActions = {
  APPEND_SECTION: "비어 있는 섹션에 새로운 뷰를 추가하는 액션",
  DELETE_SECTION: "기존 섹션을 삭제하는 이벤트"
}
export const sectionSagaActions = {
  APPEND_SECTION: "비어 있는 섹션에 새로운 뷰를 추가하는 전처리 액션"
}
export function appendSection(sectionName) {
  return {
    type: sectionSagaActions.APPEND_SECTION,
    sectionName
  }
}
export function closeSection(sectionName) {
  return {
    type: sectionActions.DELETE_SECTION,
    sectionName
  }
}