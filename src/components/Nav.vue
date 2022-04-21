<template>
  <nav class="div">
    <router-link to="/home" class="item" active-class="selected">
      <Icon name="home"/>
      首页
    </router-link>
    <router-link to="/store" class="item" active-class="selected">
      <Icon name="store"/>
      商城
    </router-link>
    <router-link to="/menu" class="item" active-class="selected">
      <Icon name="menu"/>
      租赁
    </router-link>
    <router-link to="/my" class="item" active-class="selected">
      <Icon name="my"/>
      我的
    </router-link>
  </nav>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
//将一个目录里的任意后缀文件全部引入
// import x from '@/assets/icons/labels.svg'
// import y from '@/assets/icons/money.svg'
// console.log(y)
// console.log(x)
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;

  > .item {
    background:rgba(223,239,226);
    padding: 2px 0;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon{
    width: 32px;
    height: 32px;
  }
  > .item.selected{
    color:rgba(214,71,62);
  }
}
</style>