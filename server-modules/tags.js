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

// 获取所有 tags
pub.tags = async(req, res) => {
  const queryTags = () => {
    const query = new AV.Query('Tags')
    return query.find()
  }

  try {
    const data = await queryTags()

    if (data) {
      let arr = []
      for (let item of data) {
        let result = {}
        result.objectId = item.get('objectId')
        result.tagName = item.get('tagName')
        arr.push(result)
      }
      res.send(arr)

    } else {
      throw new Error("can not find tags")
    }
  } catch (error) {
    tool.l(error)
  }
}

module.exports = pub;
