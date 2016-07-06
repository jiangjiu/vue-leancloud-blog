<template>
  <div id="wrapper">
    <vheader></vheader>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Vheader from './components/Vheader'

  export default {
    components: {
      Hello,
      Vheader
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;

  }

  #wrapper {
    /*display: flex;*/
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  }

  body a {
    text-decoration: none;
  }

  body a:link, a:visited {
    color: #000;
  }

  body ul {
    list-style: none;
    margin:0;
    padding:0;
  }

  .fade-transition {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }

</style>
