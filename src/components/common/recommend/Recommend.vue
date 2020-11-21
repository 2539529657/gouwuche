<template>
  <div class="recom">
    <TabBarItem path="pop">
      <template v-slot:slot-text>
        流行
      </template>
    </TabBarItem>
    <TabBarItem path="sell">
      <template v-slot:slot-text>
        热销
      </template>
    </TabBarItem>
    <TabBarItem path="new">
      <template v-slot:slot-text>
        上新
      </template>
    </TabBarItem>
    <!--    <div style="display: none"  v-for="item in recomm"></div>-->
  </div>

  <router-view></router-view>

</template>

<script>

  // import Fashion from "@/views/recommand/Fashion";
  import TabBarItem from "../Tabbar/Tab-bar-item";
  import {getHomeRecommendDB} from "../../../network/home";

  export default {
    name: "Recommend",
    data() {
      return {}
    },
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  .recom {
    display: flex;
    margin-top: 5vh;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-top: #6a6969 2px solid;
    border-bottom: #6a6969 3px solid;
    border-radius: 20px 20px 0px 0px;
  }

  .recom p {
    display: flex;
    border-top: #6C757D 1px solid;
  }


</style>
