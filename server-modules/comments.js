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
    query.descending('createdAt')
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

module.exports = pub;
