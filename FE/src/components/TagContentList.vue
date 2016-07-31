<template>
  <div class="list-wrapper">
    <ul class="list-container" v-if="show" transition="fade">
      <li v-for="item in finalItems">
        <a v-link="{ name: 'article', params: {id: item.objectId}}">
          <p class="list-title">{{item.title}}</p>
          <p class="list-updated">{{item.createdAt}}</p>
          <p class="list-abstract">{{item.abstract}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import { tagContentList, tagContentListId, tags } from '../vuex/getters'
  import { getTagContentList, updateHeadline } from '../vuex/actions'

  export default {
    data () {
      return {
        show: true,
        finalItems: []
      }
    },
    vuex: {
      getters: {
        items: tagContentList,
        tagId: tagContentListId,
        tags: tags
      },
      actions: {
        getTagContentList: getTagContentList,
        updateHeadline: updateHeadline
      }
    },
    watch: {
      'items': function (val, oldVal) {
        this.show = false
        setTimeout(() => {
          this.show = true
          this.finalItems = val
        }, 400)
      },
      'tags': function (val) {
        if (val) {
          this.getTagContentList(val[0].objectId)
          this.updateHeadline(val[0].tagName)
        }
      }
    }
  }
</script>

<style>
  .list-container li {
    border-bottom: 1px solid #eee;
  }

  .list-title {
    font-size: 2.6rem;
    font-weight: 400;
    color: #404040;
    margin-top: 0;
  }

  .list-abstract {
    font-size: 1.6rem;
    color: #919191;
    font-weight: 300;
  }

  .list-updated {
    font-family: "Comic Sans MS", curslve, sans-serif;
    font-size: 1.8rem;
    color: #8b8b8b;
    padding: 5px 0;
  }

  .list-container li a {
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    display: block;
    transition: all .3s;
    margin: 0;
  }

  .list-container li a:hover {
    background-color: Rgba(0, 0, 0, .02);
  }

  @media screen and (max-width: 768px) {
    .list-title {
      font-size: 2.2rem;
    }

    .list-updated {
      font-size: 1.6rem;
    }
  }
</style>
