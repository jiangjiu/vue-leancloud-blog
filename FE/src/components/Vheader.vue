<template>
  <div>
    <ul class="header">
      <li>
        <a v-link="'./home'">HOME</a>
      </li>
      <li>
        <a v-link="'./about'">ABOUT</a>
      </li>
      <li>
        <a v-link="'./tags'">TAGS</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: flex-end;
    -webkit-flex-flow: row wrap;
    margin: 0;
    /*flex: 1;*/
    height: 48px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }

  .header a {
    color: #fff;
    padding: 1em;
    display: block;
    opacity:1;
    transition: opacity 0.6s;
  }

  .header a:hover {
    opacity:0.6;
  }
</style>