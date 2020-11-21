<template>
  <div class="pop">
    <div v-for="item in recommend" :key="item" class="box">
      <a :href="item.link">
        <img :src="item.show.img" alt="">
        <p style=" font-weight: bold;">💰{{item.price}}</p>
        <p>{{item.props.join('')}}</p>
      </a>
    </div>
  </div>
</template>

<script>

  import {getHomeRecommendDB} from "../../network/home";

  export default {
    name: "Pop",
    data() {
      return {
        recommend: {}
      }
    },
    created() {
      getHomeRecommendDB().then(res => {
        this.recommend = res.data.list
        console.log(this.recommend)
      })
    }
  }

</script>

<style scoped>
  .pop {
    width: 100vw;
    height: 100vh;
    /*background: lightblue;*/
  }

  .box {
    margin-top: 2vh;
    float: left;
    width: 50vw;
    height: 48vh;
    text-align: center;
  }

  .pop img {
    /*height: 30vh;*/
    width: 50vw;
    border-radius: 4vw;
  }

</style>
