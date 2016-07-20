/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 所有 API 的路由

'use strict';

const router = require('express').Router();

// 添加一个模块
const content = require('./content')
const tags = require('./tags')
const comments = require('./comments')


// 一个 API 路由下的 hello 接口，访问 /api/hello
// router.get('/hello', content.hello);

// 博客文章列表
router.get('/content-list', content.contentList)

router.get('/article/:id', content.article)

// tags
router.get('/tags', tags.tags)

router.get('/tags/:tagId', tags.tagList)

// comments
router.get('/comments/:articleId', comments.commentsList)

router.post('/comments/submitComment',comments.submitComment )

module.exports = router;
