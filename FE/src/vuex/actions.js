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

export const getArticle = function ({dispatch}, id) {
  this.$http.get(API_ROOT + 'api/article/' + id).then(response => {
    dispatch(types.GET_ARTICLE, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_ARTICLE_FAILURE, error)
  })
}

export const clearArticle = function ({dispatch}) {
  dispatch(types.CLEAR_ARTICLE)
}
