import * as types from './mutation-types'

export const getContentList = function ({dispatch}) {
  dispatch(types.REQUEST_CONTENT_LIST)
  this.$http.get('http://localhost:3000/api/content-list').then(response => {
    dispatch(types.GET_CONTENT_LIST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_CONTENT_LIST_FAILURE, error)
  })
}
