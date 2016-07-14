<template>
  <div>
    <div class="tagset">
      <ul>
        <li v-for="tag in tags">
          <a @click="update($index, tag.tagName, tag.objectId)"
             :class="{'tagset-active': $index === selected}">
            {{tag.tagName}}
          </a>
        </li>
      </ul>
    </div>
    <tag-content-list></tag-content-list>
  </div>
</template>

<script type="text/babel">
  import {updateHeadline, getTags, getTagContentList} from '../vuex/actions'
  import {tags} from '../vuex/getters'
  import TagContentList from './TagContentList'

  export default {
    components: {
      TagContentList
    },
    data () {
      return {
        selected: 0
      }
    },
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
      this.getTags()
    },
    methods: {
      update (index, tagName, tagId) {
        this.selected = index
        this.updateHeadline(tagName)
        this.getTagContentList(tagId)
      },
      watch: {
        'tags': function (val, oldVal) {
          console.log(oldVal)
          if (val) {
            this.updateHeadline(val[0].tagName)
            console.log(2211)
          }
        }
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
    cursor: pointer;
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