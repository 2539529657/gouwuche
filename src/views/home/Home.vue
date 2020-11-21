<template>
  <NavBar class="home-nav">
    <!--头-->
    <template v-slot:center>购物街</template>

  </NavBar>

  <!--轮播图-->
  <Swiper :banner="this.bannerList"></Swiper>

  <!--  圆形排列-->
  <RoundList :round="this.recommendList"></RoundList>

  <!--  推荐菜单--><!-- :fashion="this.recommend"-->
  <Recommend></Recommend>

    <router-view></router-view>>

</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from '../../network/home';
  import Swiper from '../../components/common/Swiper';
  import RoundList from "../../components/common/RoundList"
  import Recommend from "../../components/common/recommend/Recommend"

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      RoundList,
      Recommend,
    },
    data() {
      return {
        bannerList: null,
        recommendList: null,
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.bannerList = res.data.banner.list
        this.recommendList = res.data.recommend.list
        // console.log(this.recommendList)
      })
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
