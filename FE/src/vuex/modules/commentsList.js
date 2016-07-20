import { GET_COMMENTS_LIST, GET_COMMENTS_LIST_FAILURE } from '../mutation-types'

const state = {
  commentsList: []
}

const mutations = {

  [GET_COMMENTS_LIST] (state, data) {
    state.commentsList = data
  },
  [GET_COMMENTS_LIST_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
