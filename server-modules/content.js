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

pub.hello = (req, res) => {
  tool.l('It works.');
  res.send({
    hello: 'It works.'
  });
};


pub.contentList = (req, res) => {
  let query = new AV.Query('ContentList')
  query.descending('updatedAt')
  query.limit(20)
  query.find().then(data => {
    res.send(data)
  },error => {})
}

module.exports = pub;
