import {GET_ARTICLE, GET_ARTICLE_FAILURE, CLEAR_ARTICLE} from '../mutation-types'

const state = {
  content: '',
  title: ''
}

const mutations = {

  [GET_ARTICLE] (state, data) {
    state.content = data.content
    state.title = data.title
  },
  [GET_ARTICLE_FAILURE] (state) {
    return state
  },
  [CLEAR_ARTICLE] (state) {
    state.content = ''
    state.title = ''
  }
}

export default {
  state,
  mutations
}
