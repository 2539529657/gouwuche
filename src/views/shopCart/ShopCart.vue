<template>

  <NavBar class="home-nav">
    <!--头-->
    <template v-slot:center>
      购物车车车车车(0)
    </template>
    <template v-slot:right>
      三
    </template>
  </NavBar>

  <shopCartool></shopCartool>

</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import shopCartool from "./shopCartool";

  export default {
    name: "ShopCart",
    components: {
      NavBar,shopCartool
    }
  }
</script>

<style scoped>

  .home-nav {
    background: var(--color-gray);
    color: #6a6969;
    font-weight: 600;
  }

</style>
