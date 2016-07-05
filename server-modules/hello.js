/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 一些工具方法

'use strict';

const tool = require('./tool');

let pub = {};

pub.hello = (req, res) => {
  tool.l('It works.');
  res.send({
    hello: 'It works.'
  });
};

module.exports = pub;
