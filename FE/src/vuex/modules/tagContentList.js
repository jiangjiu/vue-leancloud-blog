import {GET_TAG_CONTENT_LIST, GET_TAG_CONTENT_LIST_FAILURE} from '../mutation-types'

const state = {
  tagContentList: [],
  tagId: ''
}

const mutations = {
  [GET_TAG_CONTENT_LIST] (state, data, tagId) {
    state.tagContentList = data
    state.tagId = tagId
  },
  [GET_TAG_CONTENT_LIST_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
