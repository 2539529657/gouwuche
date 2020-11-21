<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left" class="">⬅</slot>
    </div>
    <div class="center">
      <slot name="center">购物街</slot>
    </div>
    <div class="right">
      <slot name="right">🍀</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 9;
    line-height: 44px;
  }

  .left {
    width: var(--div-width-60p);
    text-align: center;
    font-size: 1.5em;
  }

  .right {
    width: var(--div-width-60p);
    text-align: center;
  }

  .center {
    text-align: center;
    flex: 1;
  }
</style>
