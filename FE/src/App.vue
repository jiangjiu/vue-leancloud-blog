<template>
  <div id="wrapper">
    <vheader class="header"></vheader>
    <div class="main">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in"></router-view>
    </div>
    <vfooter class="footer"></vfooter>
  </div>

</template>

<script type="text/babel">
  import Vheader from './components/Vheader'
  import Vfooter from './components/Vfooter'
  import Store from './vuex/store'

  export default {
    components: {
      Vheader,
      Vfooter
    },
    store: Store
  }
</script>

<style>
  html {
    font-size: 10px;
    height:100%;
  }

  body {
    -webkit-font-smoothing:antialiased;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
    color: #404040;
    line-height: 1.7;
    height:100%;
  }

  #wrapper {
    display: flex;
    flex-flow: column;
    height:100%;
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
    transition: all .4s ease;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }

  .header, .footer {
    flex: 0 0 auto;
  }

  .main {
    flex: 1 0 auto;
    order: 1;
    display: flex;
    justify-content: center;
  }

  .main-wrapper {
    width: 80%;
    max-width: 80rem;
    transition: all .4s;
  }

  .footer {
    order: 3;
    display: flex;
    height: 10rem;
  }

  @media screen and (max-width: 768px) {
    .main-wrapper {
      width: 100%;
    }

    .footer {
      height: 6rem;
    }
  }
</style>
