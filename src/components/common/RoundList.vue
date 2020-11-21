<template>
  <div id="roundlist">
    <ul>
      <li v-for="item in round">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="item in round">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "RoundList",
    props: {
      round: Array
    }
  }
</script>

<style scoped>
  #roundlist {
    margin-top:4vh;
    width: 100vw;
  }

  #roundlist ul {
    justify-content: space-around;
    display: flex;
    margin-bottom: 3vh;
  }

  #roundlist ul li {
    display: flex;
    list-style: none;
    text-align: center;
  }

  #roundlist ul li a img {
    height: 10vh;
    width: 20vw;
  }
</style>
