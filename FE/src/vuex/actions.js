import * as types from './mutation-types'
import { API_ROOT } from '../config'

export const getContentList = function ({ dispatch }) {
  dispatch(types.REQUEST_CONTENT_LIST)
  this.$http.get(API_ROOT + 'api/content-list').then(response => {
    dispatch(types.GET_CONTENT_LIST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_CONTENT_LIST_FAILURE, error)
  })
}

//  获取标题, 更新标题
export const getHeadline = ({ dispatch }) => {
  dispatch(types.GET_HEADLINE)
}
export const updateHeadline = ({ dispatch }, value) => {
  dispatch(types.UPDATE_HEADLINE, value)
}

//  获取文章内容, 清除文章
export const getArticle = function ({ dispatch }, id) {
  this.$http.get(API_ROOT + 'api/article/' + id).then(response => {
    dispatch(types.GET_ARTICLE, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_ARTICLE_FAILURE, error)
  })
}
export const clearArticle = function ({ dispatch }) {
  dispatch(types.CLEAR_ARTICLE)
}

// 获取标签集, 获取指定标签列表
export const getTags = function ({ dispatch }) {
  this.$http.get(API_ROOT + 'api/tags').then(response => {
    dispatch(types.GET_TAGS, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_TAGS_FAILURE, error)
  })
}
export const getTagContentList = function ({ dispatch }, tagId) {
  this.$http.get(API_ROOT + 'api/tags/' + tagId).then(response => {
    dispatch(types.GET_TAG_CONTENT_LIST, JSON.parse(response.body), tagId)
  }, error => {
    dispatch(types.GET_TAG_CONTENT_LIST_FAILURE, error)
  })
}

// 根据 文章 id 获取 comments
export const getCommentsList = function ({ dispatch }, articleId) {
  this.$http.get(API_ROOT + 'api/comments/' + articleId).then(response => {
    dispatch(types.GET_COMMENTS_LIST, JSON.parse(response.body), error => {
      dispatch(types.GET_COMMENTS_LIST_FAILURE, error)
    })
  })
}
// 提交评论
export const submitComment = function ({ dispatch }, data) {
  this.$http.post(API_ROOT + 'api/comments/submitComment', data).then(response => {
    dispatch(types.SUBMIT_COMMENT, JSON.parse(response.body), error => {
      dispatch(types.SUBMIT_COMMENT_FAILURE, error)
    })
  })
}
