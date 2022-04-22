<template>
  <Layout class="all">
    <div class="top">老有帮</div>
    <div class="head">
      <div class="img1"><img src="@/assets/image/head.jpg" alt=""></div>
      <div class="middle">
        <div>
          昵称:小明
        </div>
        <div>
          积分:xxx
        </div>
        <div>
          账号:xxxxxxxx
        </div>
      </div>

    </div>
    <div class="list">
      <div>订单</div>
      <div>客服</div>
      <div>服务</div>
      <div>收藏</div>
      <div>设置</div>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "My.vue"
}
</script>

<style lang="scss" scoped>
ul, ol {
  list-style: none;
}

.all {
  display: flex;
  flex-direction: column;

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    font-size: 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    background: rgba(136, 202, 141);
  }

  .list {
    > div {
      padding: 10px;
      border: 1px solid #dddddd;

    }
  }

  .head {
    display: flex;
    flex-wrap: wrap;

    > .img1 {
      width: 50%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      > img{
        width: 40%;
      }
    }

    .middle {
      display: flex;
      flex-direction: row;
      width: 50%;
      height: 200px;
      float: right;
      margin-bottom: 50px;
      flex-direction: column;
      justify-content: center;
    }
  }
}

</style>