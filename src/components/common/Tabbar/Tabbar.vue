<template>
  <div id="tab-bar-item">
    <TabBarItem path="/home" active-color="#B7C4B3">

      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Home.svg" alt="">
      </template>
      <template v-slot:slot-active-item>
        <img src="@/assets/img/tabbar/Home2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>首页</div>
      </template>

    </TabBarItem>
    <TabBarItem path="/shopcart" active-color="#B7C4B3">

      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/shop-cart.svg" alt="">
      </template>
      <template v-slot:slot-active-item>
        <img src="@/assets/img/tabbar/shop-cart2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>购物车</div>
      </template>

    </TabBarItem>
    <TabBarItem path="/category" active-color="#B7C4B3">

      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Category.svg" alt="">
      </template>
      <template v-slot:slot-active-item>
        <img src="@/assets/img/tabbar/Category2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>分类</div>
      </template>

    </TabBarItem>
    <TabBarItem path="/profile" active-color="#B7C4B3">

      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Profile.svg" alt="">
      </template>
      <template v-slot:slot-active-item>
        <img src="@/assets/img/tabbar/Profile2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>我的</div>
      </template>
    </TabBarItem>

  </div>

</template>

<script>
  // import Tabbar from "../../components/Tabbar/Tabbar";
  import TabBarItem from "../../../components/common/Tabbar/Tab-bar-item"

  export default {
    name: "Tabbar",
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  /*@import "../../assets/css/base.css";*/

  #tab-bar-item {
    width: 100%;
    position: fixed;
    display: flex;
    bottom: 0;
    justify-content: space-around;
    background: #f6f6f6;
    font-weight: 600;
    z-index: 9;
  }

  #tab-bar-item img {
    height: 24px;
  }

</style>
