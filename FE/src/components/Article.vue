<template>
  <div>
    <p>{{content}}</p>
  </div>
</template>

<script type="text/babel">
  import {article} from '../vuex/getters'
  import {getArticle, updateHeadline, clearArticle} from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        article: article
      },
      actions: {
        getArticle,
        clearArticle,
        updateHeadline
      }
    },
    created () {
      this.getArticle(this.$route.params.id)
    },
    beforeDestroy () {
      this.clearArticle()
    },
    computed: {
      content: function () {
        this.updateHeadline(this.article.title)
        return this.article.content
      }
    }

  }
</script>