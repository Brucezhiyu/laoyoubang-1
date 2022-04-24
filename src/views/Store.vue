<template>
  <Layout>
    <div class="all">
      <div class="top">老有帮</div>
      <div class="second">二手市场  点击进入</div>
      <div class="buttons">
        <button>
          <img src="@/assets/png/1.1.png">助听
        </button>
        <button>
          <img src="@/assets/png/1.2.png">寝具
        </button>
        <button>
          <img src="@/assets/png/1.3.png">助行
        </button>
        <button>
          <img src="@/assets/png/1.4.png">呼吸机
        </button>
        <button>
          <img src="@/assets/png/1.5.png">助浴
        </button>
        <button>
          <img src="@/assets/png/1.6.png">矫形
        </button>
        <button>
          <img src="@/assets/png/1.7.png">制氧设备
        </button>
        <button>
          <img src="@/assets/png/1.8.png">康复设备
        </button>
      </div>
      <div class="pre">
        <div class="div1"><img src="@/assets/image/2.1.jpg"></div>
        <div class="div1"><img src="@/assets/image/2.2.jpg"></div>
        <div class="div1"><img src="@/assets/image/2.3.jpg"></div>
        <div class="div1"><img src="@/assets/image/2.4.jpg"></div>
        <div class="div1"><img src="@/assets/image/2.5.jpg"></div>
        <div class="div1"><img src="@/assets/image/2.6.jpg"></div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Store.vue"
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

ul, ol {
  list-style: none;
}

.all {
  font-family: $font-hei;
  display: flex;
  flex-direction: column;
  background: rgba(251, 254, 233);


  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    font-size: 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    background: rgba(136, 202, 141);
  }

  .second {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 30px;
  }

  .buttons {
    margin-top: 20px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

    > button {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      width: 25%;
      height: 80px;
      float: left;
      background: white;
      font-size: 16px;
      border: none;

      > img {
        width: inherit;
      }
    }
  }

  .pre {
    width: 100%;
    height: 400px;
    background: white;
    margin-top: 2px;
    display: flex;
    flex-wrap: wrap;

    > .div1 {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 50%;
      height: 400px;
      background: white;
      border: 1px solid #dddddd;

      > img {
        width: 100%;
      }


    }
  }
}
</style>