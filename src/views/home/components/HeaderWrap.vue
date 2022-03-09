<template>
  <div class="header-wrap">
    <header>
      <a href="javascript:;">中某县</a>
      <search-bar :placeholder="hotSearchWord" to="/search" />
    </header>
    <tab-bar :tabs="tabs" />
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
      ],
      tabs: [
        {
          text: '推荐'
        },
        {
          text: '热点解读'
        },
        {
          text: '预告片'
        },
        {
          text: '说电影'
        },
        {
          text: '佳片'
        },
        {
          text: '剧综'
        }
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
