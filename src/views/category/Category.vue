<template>
  <div class="category">
    <NavBar class="home-nav">
      <!--头-->
      <template v-slot:center>
        分类
      </template>
      <template v-slot:right>
        <img src="@/assets/img/tabbar/Category.svg" alt="">
      </template>
    </NavBar>

    <div class="sidebar left">
      <ul>
        <li v-for="(item,index) in this.categoryData" :key="index">

            {{item.title}}{{index}}

        </li>
      </ul>
    </div>

    <!--    :categoryDB="this.categoryData"-->
    <CategoryRouter :category3627="this.categoryData3627">
    </CategoryRouter>

    <!--    <Category582  :subcategory582="this.subcategory582"></Category582>-->

    <router-view></router-view>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import CategoryRouter from "../../components/common/category/CategoryRouter";
  // import Category582 from "../../components/common/category/Category582";
  import {getHomeCategory} from "../../network/home";
  import {getHomeCategory3627} from "../../network/home";
  import {getHomeSubcategory582} from "../../network/home";

  export default {
    name: "Category",
    components: {
      NavBar, CategoryRouter/*,Category582*/
    },
    data() {
      return {
        categoryData: null,
        categoryData3627: null,
        // subcategory582: null
      }
    },
    created() {
      getHomeCategory().then(res => {
        this.categoryData = res.data.category.list
        // console.log(this.categoryData)
      })
      getHomeCategory3627().then(res => {
        this.categoryData3627 = res.data.list
        console.log(this.categoryData3627)
      })
      getHomeSubcategory582().then(res => {
        this.subcategory582 = res.data.list
        console.log(this.subcategory582)
      })
    }
  }
</script>

<style scoped>

  .sidebar {
    position: fixed;
    width: 28vw;
    height: 88.5vh;
    text-align: center;
    background: #eee;
    border-bottom: 48px;
    overflow: scroll;
  }

  .sidebar li {
    height: 5.8vh;
  }

  .category {
    margin-top: 44px;
  }

  .home-nav {
    background: var(--color-gray);
    color: #6a6969;
    font-weight: 700;
  }

  .home-nav img {
    height: 3vh;
    line-height: 44px;
  }

</style>
