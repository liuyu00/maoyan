<template>
  <div class="header-wrap">
    <header>
      <a href="javascript:;">中某县</a>
      <search-bar :placeholder="hotSearchWord" to="/search" />
    </header>
    <div></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      hotSearchWord: [
        '这个杀手不太灵',
        '无名之辈',
        '你好事件'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 12px;
      text-decoration: none;
      flex-shrink: 0;
      color: #333;
      margin-right: 20px;
    }
  }
}
</style>
