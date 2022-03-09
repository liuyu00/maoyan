<template>
  <div class="tabs">
    <nav>
      <a
        v-for="(item, index) in tabs"
        :key="index"
        href="javascript:;"
      >{{item.text}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  nav {
    display: flex;
    a {
      padding: 0 10px;
      line-height: 40px;
      font-size: 14px;
      text-decoration: none;
      color: #333;
    }
  }
}
</style>
