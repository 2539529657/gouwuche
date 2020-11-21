<template>
  <div class="shopcar">
    <slot name="randio">
      <div class="shopcar-left">
        <input type="checkbox">
        <span>全选</span>
      </div>
    </slot>
    <div class="shopcar-center">
      <slot name="text">
        合计:
      </slot>
    </div>
    <div class="shopcar-right">
      <slot name="btn">
        <div><p>去结算()</p></div>
      </slot>
    </div>

  </div>
</template>

<script>

  import NavBar from "../../components/common/navBar/NavBar";

  export default {
    name: "shopCartool",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .shopcar {
    width: 100vw;
    height: 6vh;
    position: fixed;
    margin-top: 44px;
    background: #f6f7f7;
    bottom: 49px;
    border-top: 3px solid #ccc;
    line-height:6vh;
    border-bottom: 1px solid #ccc;
  }

  .shopcar-left {
    text-align: center;
    width: 30vw;
    float: left;
  }

  .shopcar-left input{
    border-radius: 50%;
  }

  .shopcar-center {
    width: 30vw;
    text-align: center;
    float: left;
  }

  .shopcar-right {
    background:#FF5100;
    color: white;
    font-weight: 700;
    text-align: center;
    width: 20vw;
    float: right;
  }

</style>
