<template>
  <div class="search-bar">
    <i class="iconfont icon-sousuo"></i>
    <div class="placeholder-wrap">
      <div :style="style">
        <span v-for="(item, index) in placeholder" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    placeholder: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    style () {
      return {
        marginTop: -this.activeIndex * 30 + 'px'
      }
    }
  },
  created () {
    setInterval(() => {
      this.activeIndex += 1
      if (this.activeIndex >= this.placeholder.length) {
        this.activeIndex = 0
      }
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  height: 30px;
  background: #eee;
  box-sizing: border-box;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  .icon-sousuo {
    font-size: 18px;
    color: #999;
    display: block;
    margin-left: 15px;
    margin-top: 5px;
  }
  .placeholder-wrap {
    font-size: 12px;
    line-height: 30px;
    color: #999;
    padding-left: 10px;
    div {
      transition: all 0.5s ease;
    }
    span {
      display: block;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
