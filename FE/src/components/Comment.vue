<template>
  <div class="comment">
    <h1>评论</h1>
    <ul class="comments-list">
      <li class="comment-item" v-for="item in finalCommentsList">
        <div class="comment-item-title">
          <p class="comment-item-name">{{item.name}}</p>
          <p class="comment-item-createdAt">{{item.createdAt}}</p>
        </div>

        <div v-if="item.reply" class="comment-reply-container">
          <div class="comment-item-title">
            <p class="comment-item-name">{{item.reply.name}}</p>
            <p class="comment-item-createdAt">{{item.reply.createdAt}}</p>
          </div>
          <p class="comment-item-content">{{item.reply.content}}</p>
        </div>

        <p class="comment-item-content">{{item.content}}</p>
        <div class="comment-item-reply-wrapper">
          <a @click="reply(item.objectId, item.name)" class="comment-item-reply">回复</a>
        </div>
      </li>
    </ul>
    <a name="firstAnchor"></a>
    <h1 id="comment-form-title">回复{{replyName}}</h1>
    <div class="comment-form">
      <input v-model="formName" class="comment-form-name" type="text" placeholder="昵称" maxlength="20">
      <textarea v-model="formContent" class="comment-form-content" name="" id="" cols="30" rows="10"
                placeholder="内容"></textarea>
      <div class="comment-item-reply-wrapper">
        <a @click="submit" class="comment-item-reply comment-item-reply-submit">提交</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import { getCommentsList, submitComment } from '../vuex/actions'
  import { commentsList } from '../vuex/getters'

  export default {
    data () {
      return {
        formName: '',
        formContent: '',
        formReply: '',
        replyName: '',
        articleId: this.$route.params.id
      }
    },
    vuex: {
      actions: {
        getCommentsList: getCommentsList,
        submitComment: submitComment
      },
      getters: {
        commentsList: commentsList
      }
    },
    created () {
      this.getCommentsList(this.articleId)
    },
    computed: {
      finalCommentsList () {
        return this.commentsList.map((item, index, arr) => {
          if (item.reply) {
            const replyToId = item.reply
            let obj = {}
            let reply = arr.find(data => data.objectId === replyToId)
            obj.objectId = item.objectId
            obj.name = item.name
            obj.createdAt = item.createdAt
            obj.content = item.content
            obj.reply = reply

            return obj
          }
          return item
        })
      }
    },
    methods: {
      submit () {
        if (!this.formName.trim() || !this.formContent.trim()) {
          window.alert('昵称和内容不可为空')
          return
        }
        const data = {
          name: this.formName,
          content: this.formContent,
          reply: this.formReply,
          articleId: this.articleId
        }
        this.submitComment(data)
        this.formName = ''
        this.formContent = ''
        this.replyName = ''
        this.formReply = ''
      },
      reply (replyToId, replyToName) {
        this.replyName = replyToName
        window.location.hash = ''
        window.location.hash = 'firstAnchor'
        this.formReply = replyToId
      }
    }
  }
</script>

<style>
  .comment h1 {
    border-bottom: 1px dashed #d2d2d2;
    margin: 1rem;
  }

  .comment-item {
    display: flex;
    flex-flow: column wrap;
    justify-items: center;
  }

  .comment-item-title {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #f7f7f7;
    padding: .5rem 1rem;
    border-radius: .5rem;
  }

  .comment-item-name {
    font-weight: bold;
  }

  .comment-item-content {
    padding: 1rem;
  }

  .comment-item-reply-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }

  .comment-item-reply {
    padding: 1rem;
    transition: all .4s;

  }

  .comment-item-reply:hover {
    color: #838383;
    cursor: pointer;
  }

  .comment-reply-container {
    /*background-color: rgba(0, 0, 0, .1);*/
    border: 1px solid #d2d2d2;
    border-radius: .5rem;
    margin: 1rem;
    color: #7c7c7c;
  }

  .comment-reply-container .comment-item-title {
    background-color: #fbfbfb;
  }

  .comment-form {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem;
  }

  .comment-form-name, .comment-form-content {
    border: 1px solid #d2d2d2;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: .5rem;
  }

  .comment-form-name {
    height: 3.6rem;
  }

  .comment-form-content {
    resize: none;
  }

  .comment-item-reply-submit {
    border: 1px solid #d2d2d2;
    border-radius: .5rem;
  }

</style>
