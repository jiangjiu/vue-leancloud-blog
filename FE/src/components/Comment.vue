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
          <a class="comment-item-reply">回复</a>
        </div>
      </li>
    </ul>
    <!--<div class="comment-input">-->
      <!--<input type="text">-->
      <!--<textarea name="" id="" cols="30" rows="10"></textarea>-->
    <!--</div>-->
  </div>
</template>

<script type="text/babel">
  import { getCommentsList } from '../vuex/actions'
  import { commentsList } from '../vuex/getters'

  export default {
    data () {
      return {}
    },
    vuex: {
      actions: {
        getCommentsList: getCommentsList
      },
      getters: {
        commentsList: commentsList
      }
    },
    created () {
      this.getCommentsList(this.$route.params.id)
    },
    computed: {
      finalCommentsList () {
        return this.commentsList.map((item, index, arr) => {
          if (item.reply) {
            const objectId = item.reply
            let obj = {}
            let reply = arr.find(data => data.objectId === objectId)
            obj.objectId = objectId
            obj.name = item.name
            obj.createdAt = item.createdAt
            obj.content = item.content
            obj.reply = reply

            return obj
          }
          return item
        })
      }
    }
  }
</script>

<style>
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
    border:1px solid #d2d2d2;
    border-radius: .5rem;
    margin:1rem;
    color: #7c7c7c;
  }
  .comment-reply-container .comment-item-title {
    background-color: #fbfbfb;
  }
</style>
