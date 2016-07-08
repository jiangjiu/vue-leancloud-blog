<template>
  <div class="list-wrapper">
    <ul class="list-container" id="list-ul">
      <li v-for="item in items"  transition="staggered"
          stagger="100">
        <a v-link="'./about'">
          <p class="list-title">{{item.title}}</p>
          <p class="list-updated">{{item.createdAt}}</p>
          <p class="list-abstract"><i>{{item.abstract}}</i></p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import {contentList} from '../vuex/getters'
  import {getContentList, updateHeadline} from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        items: contentList
      },
      actions: {
        getList: getContentList,
        updateHeadline: updateHeadline
      }
    },
    created () {
      this.getList()
      this.updateHeadline('将就的博客')
    }
  }
</script>

<style>
  .list-wrapper {
    width: 87%;
    transition: all .4s;
  }

  .list-container li {
    border-bottom: 1px solid #eee;
  }

  .list-title {
    font-size: 26px;
    font-weight: 500;
    color: #404040;
    margin-top: 0;
  }

  .list-abstract {
    font-size: 16px;
    color: #919191;
    font-weight: 100;
  }

  .list-updated {
    font-family: "Comic Sans MS", curslve, sans-serif;
    font-size: 18px;
    color: #8b8b8b;
    padding:5px 0;
  }

  .list-container li a {
    padding: 1rem 2rem;
    /*background-color: #;*/
    display: block;
    transition: all .3s;
  }

  .list-container li a:hover {
    background-color: #ededed;
  }

  .staggered-transition {
    transition: all .4s ease;
    overflow: hidden;
    margin: 0;
  }
  .staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
  }

</style>
