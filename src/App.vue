<template>
  <Tabbar></Tabbar>
  <router-view></router-view>
</template>

<script>
  import Tabbar from "./components/common/Tabbar/Tabbar";

  export default {
    name: 'App',
    components: {
      Tabbar
    }
  }
</script>
<style>

  @import "assets/css/base.css";
</style>
