<template>
  <div class="list-wrapper">
    <ul class="list-container" id="list-ul" v-if="show" transition="fade">
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
  import {tagContentList, tagContentListId, tags} from '../vuex/getters'
  import {getTagContentList, updateHeadline, clearTagContentList} from '../vuex/actions'

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
        updateHeadline: updateHeadline,
        clearTagContentList: clearTagContentList
      }
    },
    created () {
      this.getTagContentList(this.tagId)
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

