<template>
  <div class="nav-wrapper">
    <div class="content">
        <slot/>
<!--      获取Money等组件内容-->
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout.vue"
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
}
</style>