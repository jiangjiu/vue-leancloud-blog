<template>
  <div>
    <ul :class="[nav, isTop ? '' : navFixed]">
      <li>
        <a v-link="'./home'">主页</a>
      </li>
      <li>
        <a v-link="'./about'">关于</a>
      </li>
      <li>
        <a v-link="'./tags'">标签</a>
      </li>
    </ul>
    <div class="header-title"><h1>将就的博客</h1></div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        nav: 'nav',
        navFixed: 'nav-fixed',
        isTop: true
      }
    },
    ready () {
      window.onscroll = () => {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        this.isTop = scrollTop === 0
      }
    }
  }
</script>

<style scoped>
  .nav {
    position: fixed;
    width: 100%;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    transition: all .4s;
  }

  .nav-fixed {
    color: #000;
    background-color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #bababa;
  }

  .nav a {
    font-size: 14px;
    display: block;
    padding: 18px;
    opacity: 1;
    transition: opacity 0.6s;
  }

  .nav a:hover {
    opacity: 0.6;
  }

  .header {
    height: 417px;
    background-color: #9e9e9e;
    display: flex;
    flex-direction: column;
    background-image: url(http://huangxuan.me/img/home-bg.jpg);
  }

  .header-title {
    color: #fff;
    align-self: center;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .header-title h1 {
    font-size: 50px;
  }
</style>