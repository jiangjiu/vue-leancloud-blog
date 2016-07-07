<template>
  <div id="wrapper">
    <vheader class="header"></vheader>
    <div class="main">
      <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
    <aside class="aside"></aside>
    <vfooter class="footer"></vfooter>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Vheader from './components/Vheader'
  import Aside from './components/Aside'
  import Vfooter from './components/Vfooter'
  import Store from './vuex/store'

  export default {
    components: {
      Hello,
      Vheader,
      Aside,
      Vfooter
    },
    store: Store
  }
</script>

<style>
  html {
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #wrapper {
    display: flex;
    flex-flow: row wrap;
  }

  body a {
    text-decoration: none;
  }

  body a:link, a:visited {
    color: inherit;
  }

  body ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .fade-transition {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }

  .header, .footer {
    flex: 1 100%;
  }

  .main {
    flex: 1 0 70%;
    order: 1;
    display: flex;
    justify-content: flex-end;
  }

  .aside {
    order: 2;
    flex: 1 0 25%;
    display: flex;
  }

  .footer {
    order: 3;
    display: flex;
    height: 100px;
  }
</style>
