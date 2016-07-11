<template>
  <div class="article">
    <div v-html="content"></div>
  </div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import hljs from 'highlight.js'
  import {article} from '../vuex/getters'
  import {getArticle, updateHeadline, clearArticle} from '../vuex/actions'

  marked.setOptions({
    highlight: code => hljs.highlightAuto(code).value
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
  .hljs-comment, .hljs-quote {
    color: #7e7887
  }

  .hljs-variable, .hljs-template-variable, .hljs-attribute, .hljs-regexp, .hljs-link, .hljs-tag, .hljs-name, .hljs-selector-id, .hljs-selector-class {
    color: #be4678
  }

  .hljs-number, .hljs-meta, .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params {
    color: #aa573c
  }

  .hljs-string, .hljs-symbol, .hljs-bullet {
    color: #2a9292
  }

  .hljs-title, .hljs-section {
    color: #576ddb
  }

  .hljs-keyword, .hljs-selector-tag {
    color: #955ae7
  }

  .hljs-deletion, .hljs-addition {
    color: #19171c;
    display: inline-block;
    width: 100%
  }

  .hljs-deletion {
    background-color: #be4678
  }

  .hljs-addition {
    background-color: #2a9292
  }

  .hljs {
    display: block;
    overflow-x: auto;
    background: #19171c;
    color: #8b8792;
    padding: 0.5em
  }

  .hljs-emphasis {
    font-style: italic
  }

  .hljs-strong {
    font-weight: bold
  }
  .article pre {
    padding:1rem;
    font:14px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    background-color: #f7f7f7;
    white-space:pre-wrap;
  }
  .article code {
    font:inherit;
  }
  .article table {
    border-collapse:collapse;
  }
  .article td,th {
    border: 1px solid #ddd;
    padding:.3rem .6rem;
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
    color:#80b2ff;
  }
  .article img,code {
    max-width:90%;
  }
  .article h2 {
    border-bottom: 1px solid #d2d2d2;
    margin:1rem 0;
  }
  .article ul {
    padding:1rem;
  }
  .article li {
    list-style: disc;
  }
</style>