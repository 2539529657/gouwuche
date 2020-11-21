<template>
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
  export default {
    name: "Category3627",
    props: {
      category3627: Object
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
  }
</style>
