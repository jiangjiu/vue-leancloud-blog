<template>
  <div class="article">
    <div v-html="content">zzz</div>
  </div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'
  import {article} from '../vuex/getters'
  import {getArticle, updateHeadline, clearArticle} from '../vuex/actions'

  marked.setOptions({
    highlight: (code) => Prism.highlight(code, Prism.languages.javascript)
  })
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
        let _content = this.article.content
        marked(_content, (err, content) => {
          if (!err) {
            _content = content
          }
        })
        return _content
      }
    }
  }
</script>

<style>

  .article pre {
    padding: 1rem;
    font: 14px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    background-color: #f7f7f7;
    white-space: pre-wrap;
    max-width: 800px;
  }

  .article code {
    font: inherit;
  }

  .article table {
    border-collapse: collapse;
  }

  .article td, th {
    border: 1px solid #ddd;
    padding: .3rem .6rem;
  }

  .article tbody tr:nth-child(2n+1) {
    background-color: #f7f7f7;
  }

  .article a {
    color: #3a40ff;
    display: block;
    transition: all .4s;
  }

  .article a:hover {
    color: #80b2ff;
  }

  .article img, code {
    max-width: 90%;
  }

  .article h1, h2 {
    border-bottom: 1px solid #d2d2d2;
    margin: 1rem 0;
  }

  .article ul {
    padding: 0 1rem;
  }

  .article li {
    list-style: disc;
  }
  .article p{
    padding: .1rem 0;
  }
</style>