import state from './userLogin/state'
import getters from './userLogin/getters'
import actions from './userLogin/actions'
import mutations from './userLogin/mutations'

const userLogin = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default userLogin
