<template>
  <Layout>
    <div class="top">老有帮</div>
    <div class="middle">所包含的租赁内容</div>
    <div class="labels">
      <div><div class="div1">电动轮椅（1个月）</div><img src="@/assets/image/3.1.jpg" alt="" width="100%"></div>
      <div><div class="div2">四爪1拐杖（1年）</div><img src="@/assets/image/3.2.jpg" alt="" width="100%"></div>
      <div><div class="div3">胸腰骶固定器(2周)</div><img src="@/assets/image/3.3.jpg" alt="" width="100%"></div>
      <div><div class="div4">胸腰骶固定器(1周)</div><img src="@/assets/image/3.4.jpg" alt="" width="100%"></div>
    </div>

  </Layout>
</template>

<script lang="ts">
export default {
  name: "Menu.vue"
}
</script>

<style lang="scss" scoped>
ul, ol {
  list-style: none;
}

.top {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: rgba(136, 202, 141);
}

.middle {
  display: flex;
  align-items: center;
  padding: 16px 25px;
  font-size: 20px;
}

.labels {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    border: 1px solid rgba(35, 126, 119);
    width: 40vw;
    height: 40vw;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .div1 {
    width: 40vw;
    height: 10vw;
    color: white;
    text-align: center;
    padding: 5px;
    transform: translateX(-1px);
    background: rgba(35, 126, 119);
    display: flex;
    justify-content: center;
    align-items: center;


  }

  .div2 {
    width: 40vw;
    height: 10vw;
    color: white;
    text-align: center;
    padding: 5px;
    transform: translateX(-1px);
    background: rgba(35, 126, 119);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .div3 {

    width: 40vw;
    height: 10vw;
    color: white;
    text-align: center;
    padding: 5px;
    transform: translateX(-1px);
    background: rgba(35, 126, 119);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .div4 {
    width: 40vw;
    height: 10vw;
    color: white;
    text-align: center;
    padding: 5px;
    transform: translateX(-1px);
    background: rgba(35, 126, 119);
    display: flex;
    justify-content: center;
    align-items: center;
  }


}
</style>