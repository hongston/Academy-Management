export const sectionActions = {
  APPEND_SECTION: "비어 있는 섹션에 새로운 뷰를 추가하는 액션"
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