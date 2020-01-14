/* eslint-disable */

const mutations = {
  setLogin(state, data) {
    state.userLogin.username = data.username
    state.userLogin.firstName = data.firstName
    state.userLogin.lastName = data.lastName
    state.userLogin.pid = data.pid
    state.userLogin.status = data.status
  }
}
export default mutations
