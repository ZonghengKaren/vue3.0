<template>
  <div class="about">
    <div class="title">
      <h1>This is an about page</h1>
    </div>
    <div class="button">
      <van-button type="default">默认按钮1</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <img alt="Vue logo" src="../assets/001.png"/>
  </div>
</template>
<script>
  import { Button } from 'vant'
  export default {
    name: 'About',
    components: {
      'van-button': Button
    },
    computed: {
    },
    mounted() {
      console.log(Button)
      this.$axios.post('/api/v1/cmm/hot/products',{size: 20})
              .then((res) => {
                console.log(res);
              })
              .then(() => {
                console.log(888);
              })
              .then(() => {
                console.log(999);
              })
              .catch((e) => {
                console.log(e);
              })
    }
  }
</script>
<style lang="less" scoped>
  @import '~@/assets/style/fn.less';
  .title{
    display: flex;
    position: relative;
    &:after{
      .setTopLine()
    }
    h1 {
      color: @colorPrimary;
      font-size: 0.48rem;
    }
  }
</style>