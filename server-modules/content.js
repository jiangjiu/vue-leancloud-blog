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

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

let pub = {};

pub.hello = (req, res) => {
  tool.l('It works.');
  res.send({
    hello: 'It works.'
  });
};

// 获取文章列表
pub.contentList = async(req, res) => {
  const queryContentList = () => {
    const query = new AV.Query('ContentList')
    query.descending('createdAt')
    // query.limit(20)
    return query.find()
  }
  try {
    //await 好喜欢!
    const data = await queryContentList()

    if (data) {
      let arr = []
      for (let item of data) {
        let result = {}
        result.objectId = item.get('objectId')
        result.title = item.get('title')
        result.abstract = item.get('abstract')
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

//  获取指定 id 的文章信息
pub.article = async(req, res) => {
  const id = req.params.id
  
  const queryArticle = (id) => {
    const query = new AV.Query('ContentList')
    return query.get(id)
  }

  try {
    const data = await queryArticle(id)

    let result = {}
    if (data) {
      result.content = data.get('content')
      result.title = data.get('title')
      res.send(result)
    } else {
      throw new Error('article can not found')
    }
  } catch (error) {
    tool.l(error)
  }


}

module.exports = pub;
