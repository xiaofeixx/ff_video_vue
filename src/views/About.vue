<template lang="html">
  <div class="back"
       @touchstart.prevent="touchStart" @touchmove.prevent="touchMove"
       @touchend="touchEnd" ref="back">
    <div class="back-l" ref="left"></div>
    <div class="back-r" ref="right"></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPlay: 'red',
      percent: 0
    }
  },
  created () {
    this.touch = {}
  },
  methods: {
    touchStart (e) {
      const touch = e.touches[0]
      this.touch.startX = touch.pageX
      this.touch.startY = touch.pageY
    },
    touchMove (e) {
      console.log('move')
      const touch = e.touches[0]
      const deltaX = touch.pageX - this.touch.startX
      const deltaY = touch.pageY - this.touch.startY
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return
      }
      const left = this.currentPlay === 'red' ? 0 : -window.innerWidth
      var offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX))
      this.percent = Math.abs(offsetWidth / window.innerWidth)
      this.$refs.back.style.transform = `translate3d(${offsetWidth}px,0,0)`
      this.$refs.back.style.transitionDuration = 10
    },
    touchEnd () {
      console.log('end')
      console.log(this.percent)
      let offsetWidth
      // eslint-disable-next-line no-unused-vars
      let percent
      if (this.currentPlay === 'red') {
        if (this.percent > 0.1) {
          this.currentPlay = 'yellow'
          offsetWidth = -window.innerWidth
        } else {
          offsetWidth = 0
        }
      } else {
        if (this.percent < 0.9) {
          this.currentPlay = 'red'
          offsetWidth = 0
        } else {
          offsetWidth = -window.innerWidth
        }
      }
      this.$refs.back.style.transform = `translate3d(${offsetWidth}px,0,0)`
      this.$refs.back.style.transitionDuration = 10
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .back
    position: fixed
    width: 100%
    height: 100px
    white-space: nowrap

    .back-l
      position: relative
      vertical-align: top
      display: inline-block
      width: 100%
      height: 100%
      background-color: red

    .back-r
      display: inline-block
      vertical-align: top
      position: relative
      width: 100%
      height: 100%
      background-color: yellow

</style>
