/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 一些工具方法

'use strict';

const tool = require('./tool');
const AV = require('leanengine')
const Comment = AV.Object.extend('Comments')

let pub = {};

// 根据 id 获取 comments 列表
pub.commentsList = async(req, res) => {
  const articleId = req.params.articleId
  if (articleId === '') {
    res.status(500).send('id is empty')
  }
  const queryComments = () => {
    const targetArticle = AV.Object.createWithoutData('ContentList', articleId)
    const query = new AV.Query('Comments')
    query.ascending('createdAt')
    query.equalTo('pointerArticle', targetArticle)
    return query.find()
  }

  try {
    const data = await queryComments()

    if (data) {
      let arr = []

      for (let item of data) {
        let result = {}
        result.objectId = item.get('objectId')
        result.name = item.get('name')
        result.content = item.get('content')
        result.reply = item.get('reply')
        result.createdAt = item.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        arr.push(result)
      }

      res.send(arr)
    } else {
      throw new Error('Can not find.');
    }
  }
  catch (error) {
    tool.l(error)
  }
}

pub.submitComment = async(req, res) => {
  const name = req.body.name
  const content = req.body.content
  const reply = req.body.reply
  const articleId = req.body.articleId

  if (!name.trim() || !content.trim()) {
    res.status(500).send('昵称和内容不可为空')
  }

  const getTargetArticle = () => {
    const targetArticle = new AV.Query('ContentList')
    return targetArticle.get(articleId)
  }

  const saveComment = async() => {
    let comment = new Comment()
    comment.set('name', name)
    comment.set('content', content)
    comment.set('reply', reply)

    const targetArticle = await getTargetArticle()
    comment.set('pointerArticle', targetArticle)

    return comment.save()

  }

  try {
    const data = await saveComment()

    let result = {}
    result.objectId = data.get('objectId')
    result.name = data.get('name')
    result.content = data.get('content')
    result.reply = data.get('reply')
    result.createdAt = data.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
    tool.l(result)
    res.send(result)
  } catch (error) {
    tool.l(error)
    res.status(500).send(error)
  }
}

module.exports = pub;
