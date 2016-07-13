<template>
  <div>
    <div class="tagset">
      <ul>
        <li v-for="tag in tags">
          <a @click="update(tag.tagName, tag.objectId)"
             v-link="{name:'tag', params: {tagName: tag.tagName}, activeClass: 'tagset-active'}">
            {{tag.tagName}}
          </a>
        </li>
      </ul>
    </div>
    <router-view keep-alive></router-view>
  </div>
</template>

<script type="text/babel">
  import {updateHeadline, getTags, getTagContentList} from '../vuex/actions'
  import {tags} from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        tags: tags
      },
      actions: {
        updateHeadline: updateHeadline,
        getTags: getTags,
        getTagContentList: getTagContentList
      }
    },
    created () {
      this.updateHeadline('标签')
      this.getTags()
    },
    methods: {
      update (tagName, tagId) {
        this.updateHeadline(tagName)
        this.getTagContentList(tagId)
      }
    }
  }
</script>

<style>
  .tagset {
    margin: 2rem auto;
  }

  .tagset ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .tagset li {
    margin: .2rem;
  }

  .tagset li a {
    display: block;
    padding: .2rem 1rem;
    margin: 0;
    border: 1px solid #d2d2d2;
    border-radius: 1.5rem;
    color: #f7f7f7;
    background-color: rgb(196, 196, 196);
    transition: all .4s;
  }

  .tagset li a:hover, .tagset .tagset-active {
    background-color: #efefef;
    color: #424242;
  }
</style>