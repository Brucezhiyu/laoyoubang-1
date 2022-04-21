<template>
  <div>
    <Layout>

      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>
            新增标签
          </button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text">
        </label>
      </div>
      <div class="">
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div>number pad</div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money.vue",
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>