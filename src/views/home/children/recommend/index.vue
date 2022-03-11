<template>
  <div>
    <banner :images="bannerList" />
    <!-- <quick-navigation /> -->
  </div>
</template>

<script>
import Banner from './components/Banner'
export default {
  name: 'recommend',
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    Banner
  },
  created () {
    this.initHomeData()
  },
  methods: {
    initHomeData () {
      this.$api.home.banner().then((res) => {
        this.bannerList = res.data.data[0].config
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
