<template>
  <div class="about-wrapper">

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
  }
</style>