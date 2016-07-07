<template>
  <div class="list-wrapper">
    <ul class="list-container">
      <li class="" v-for="item in items">
        <a v-link="'./about'">
          <p class="list-title">{{item.title}}</p>
          <p class="list-abstract"><i>{{item.abstract}}</i></p>
          <p class="list-updated">{{item.updatedAt}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import {contentList} from '../vuex/getters'
  import {getContentList} from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        items: contentList
      },
      actions: {
        getList: getContentList
      }
    },
    created () {
      this.getList()
      console.log(this.state)
    }
  }
</script>

<style>
  .list-wrapper {
    width: 84%;
    transition: all .4s;
  }

  .list-container li {
    border-bottom: 1px solid #eee;
  }

  .list-title {
    font-size: 26px;
    font-weight: 700;
    color: #404040;
    margin-top: 0;
  }

  .list-abstract {
    font-size: 16px;
    color: #919191;
  }

  .list-updated {
    font-family: "Comic Sans MS",curslve,sans-serif;
    font-size: 18px;
    color: #8b8b8b;
    margin-bottom: 0;
  }

  .list-container li a {
    padding: 1rem 2rem;
    background-color: #fff;
    display: block;
    opacity: 1;
    transition: all .3s;
  }

  .list-container li a:hover {
    color: #d2d2d2;
    opacity: .8;
    background-color: #f6f6f6;
  }


</style>
