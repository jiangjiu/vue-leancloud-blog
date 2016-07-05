<template>
  <div id="wrapper">
    <vheader></vheader>
    <router-view></router-view>
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

  body ul, li {
    list-style: none;
  }

</style>
