export const sectionActions = {
  APPEND_SECTION: "비어 있는 섹션에 새로운 뷰를 추가하는 액션"
}
export function appendSection(sectionId) {
  return {
    type: sectionActions.APPEND_SECTION,
    sectionId
  }
}