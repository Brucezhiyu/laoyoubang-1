<template>
  <Layout class="all">
    <div class="top">
      老有帮
    </div>
    <div class="view">
      <img src="@/assets/image/1.jpg" alt="image" width="490" height=227/>
    </div>
    <div class="middle">
      <input placeholder="请输入关键词搜索">

    </div>
    <div class="bottom">
      <ul class="siteList">
        <li>
          <div class="site">爆款拐杖</div>
          <img src="@/assets/image/2.jpg" class="image"/>
        </li>
        <li>
          <div class="site">爆款碗筷</div>
          <img src="@/assets/image/3.jpg" class="image"/>
        </li>
        <li>
          <div class="site">防摔马桶</div>
          <img src="@/assets/image/4.jpg" class="image"/>
        </li>
        <li>
          <div class="site">私人订制</div>
          <img src="@/assets/image/5.jpg" class="image"/>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Home.vue"
}
</script>

<style lang="scss" scoped>
ul, ol {
  list-style: none;
}

.all {
  background: rgba(244, 244, 244);

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    font-size: 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    background: rgba(136, 202, 141);
  }

  .view {
    width: 100%;
    height: 36%;
    display: flex;
    justify-content: center;
  }

  .middle {
    margin: 10px 25px 10px 25px;
    display: flex;
    justify-content: space-between;

    > input {
      width: 100%;
      height: 40px;
      padding: 0px 10px;

      border: 1px solid #ddd;
      font-size: 20px;
      background: white;
    }

  }

  .siteList {
    display: flex;
    background: rgba(255, 249, 191);
    flex-wrap: wrap;
    justify-content: center;

    > li {
      display: flex;
      align-items: center;
      min-width: 160px;
      height: 100px;
      margin: 20px 7px;
      background: rgba(136, 202, 141);
      border-radius: 5px;

      .image {
        width: 80px;
        height: 80px;
      }
      .site{
        margin: 6px;
      }
    }

  }
}


</style>