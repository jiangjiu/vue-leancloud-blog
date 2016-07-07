import * as types from './mutation-types'
import {API_ROOT} from '../config'

export const getContentList = function ({dispatch}) {
  dispatch(types.REQUEST_CONTENT_LIST)
  this.$http.get(API_ROOT + 'api/content-list').then(response => {
    dispatch(types.GET_CONTENT_LIST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_CONTENT_LIST_FAILURE, error)
  })
}

export const getHeadline = ({dispatch}) => {
  dispatch(types.GET_HEADLINE)
}

export const updateHeadline = ({dispatch}, value) => {
  dispatch(types.UPDATE_HEADLINE, value)
}
