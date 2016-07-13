<template>
  <div id="wrapper">
    <vheader class="header"></vheader>
    <div class="main">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in"></router-view>
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
  }

  body {
    margin: 0;
    padding: 0;
    /*background-color: #f9f9f9;*/
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
    color: #404040;
    font-size: 16px;
    line-height: 1.7;
  }

  #wrapper {
    display: flex;
    flex-flow: row wrap;
  }

  body a {
    text-decoration: none;
  }

  .nav a:link, a:visited {
    color: inherit;
  }

  body ul, li, p {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  .fade-transition {
    transition: all .3s ease;
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
.main-wrapper {
  width: 87%;
  transition: all .4s;
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
