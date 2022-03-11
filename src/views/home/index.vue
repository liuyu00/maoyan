<template>
  <div class="home-page">
    <HeaderWrap />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderWrap from './components/HeaderWrap'
export default {
  name: 'home',
  components: {
    HeaderWrap
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  .content {
    background: #f2f2f2;
    width: 100vw;
    min-height: calc(100vh - 140px);
  }
}
</style>
