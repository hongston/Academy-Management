export const workerSagaActions = {
  USER_SIGN_IN: "유저가 로그인을 시도"
}

export function login(params) {
  return {
    type: workerSagaActions.USER_SIGN_IN,
    params
  }
}