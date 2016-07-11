<template>
  <div class="about-wrapper">
    <h2>将就</h2>
    <p>北邮研二  前端工程师  健身爱好者</p>
    <a href="https://github.com/jiangjiu">Github</a>
    <a href="http://weibo.com/2900330731/profile?topnav=1&wvr=6&is_all=1">微博</a>
  </div>
</template>

<script type="text/babel">
  import {updateHeadline} from '../vuex/actions'
  export default {
    vuex: {
      actions: {
        updateHeadline: updateHeadline
      }
    },
    created () {
      this.updateHeadline('关于')
    }
  }
</script>

<style>
  .about-wrapper {
    width:87%;
    padding: 1rem;;
  }

  .about-wrapper a {
    color: #3a40ff;
    display: block;
    transition: all .4s;
  }
  .about-wrapper a:hover {
    color: #80b2ff;
  }

  .about-wrapper p,h2,a {
    margin:10px auto;
  }
</style>