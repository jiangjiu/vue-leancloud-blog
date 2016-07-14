<template>
  <div>
    <div class="header-background"></div>
    <ul :class="[nav, isTop ? '' : navFixed]">
      <li>
        <a v-link="'/home'">主页</a>
      </li>
      <li>
        <a v-link="'/about'">关于</a>
      </li>
      <li>
        <a v-link="'/tags'">标签</a>
      </li>
    </ul>
    <div class="header-title"><h1 v-if="show" transition="fade">{{headlineFinal}}</h1></div>
  </div>
</template>

<script type="text/babel">
  import {headline} from '../vuex/getters'

  export default {
    data () {
      return {
        show: true,
        nav: 'nav',
        navFixed: 'nav-fixed',
        isTop: true,
        headlineFinal: ''
      }
    },
    vuex: {
      getters: {
        headline: headline
      }
    },
    watch: {
      'headline': function (val, oldVal) {
        this.show = false
        setTimeout(() => {
          this.show = true
          this.headlineFinal = val
        }, 400)
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
    background-color: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #bababa;
  }

  .nav a {
    font-size: 1.4rem;
    display: block;
    margin: 0;
    padding: 1.2rem 1.8rem;
    opacity: 1;
    transition: opacity 0.6s;
  }

  .nav a:hover {
    opacity: 0.7;
  }

  .header {
    height: 30rem;
    display: flex;
    flex-direction: column;

  }

  .header-background {
    z-index: -1;
    position: absolute;
    height: 30rem;
    width: 100%;
    left: 0;
    top: 0;
    background: #9e9e9e url('../assets/banner.jpg') no-repeat;
    background-size: cover;
  }

  .header-title {
    color: #fff;
    display: flex;
    align-self: center;
    margin: auto;
    justify-content: center;
    align-items: center;
    max-width: 94%;
  }

  .header-title h1 {
    font-size: 4rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    .header-title h1 {
      font-size: 2.6rem;
    }

    .nav a {
      font-size: 1.4rem;
      padding: 1rem 1.4rem;
    }

    .header, .header-background {
      height: 24rem;
    }
  }
</style>