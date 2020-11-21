<template>

  <!--  <Category3627 :category3627="this.categoryData3627"></Category3627>-->

  <div class="shop-right right">
    <ul>
      <li v-for="item2 in category3627">
        <a :href="item2.link">
          <img :src="item2.image" alt="">
          <p>{{item2.title}}</p>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>

  import Tabbar from "../Tabbar/Tabbar";
  import TabBarItem from "../Tabbar/Tab-bar-item"
  import Category3627 from "./Category3627";

  export default {
    name: "CategoryRouter",
    components: {
      TabBarItem, Category3627
    },
    props: {
      categoryDB: {
        type: Object
      },
      category3627: {
        type: Object
      },
    },
    methods: {
      getid(index) {
        console.log(index)
      },
      clickRouter(index) {

      }
    }
  }
</script>

<style scoped>

  .shop-right {
    width: 70vw;
    margin-bottom: 44px;
    text-align: center;
  }

  .shop-right ul li {
    list-style: none;
    float: left;
    width: 35vw;
  }

  .shop-right img {
    margin-top: 1vh;
    width: 35vw;
    height: 18vh;
  }


</style>
