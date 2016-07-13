import {GET_TAGS, GET_TAGS_FAILURE} from '../mutation-types'

const state = {
  tagSet: []
}

const mutations = {
  [GET_TAGS] (state, items) {
    state.tagSet = items
  },
  [GET_TAGS_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
