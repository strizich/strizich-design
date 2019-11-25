<template>
   <button class="sd--button sd--button__flat" @click="setAnimation">
      <span class="sd--hamburger">
        <i class="sd--hamburger__bar" :class="`bar--${n}`" v-for="n in 3" :key="n"/>
      </span>
    </button>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'IconHamburger',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen: function () {
      this.isOpen = !this.isOpen
    },
    setAnimation: function () {
      this.toggleOpen()
      const animOptions = {
        duration: 300,
        direction: this.animDirection,
        easing: 'easeInOutQuart'
      }
      this.setTopBar(animOptions, '.bar--1')
      this.setCenterBar(animOptions, '.bar--2')
      this.setBottomBar(animOptions, '.bar--3')
      this.setBackground(animOptions, '.sd--button')
      this.$emit('on-open', this.isOpen)
    },
    setBackground: function (options, target) {
      anime({
        targets: '.sd--button__flat',
        backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,.1)'],
        ...options
      })
    },
    setTopBar: function (options, target) {
      anime({
        targets: target,
        translateY: [0, 7],
        rotateZ: [0, -225],
        ...options
      })
    },

    setCenterBar: function (options, target) {
      anime({
        targets: target,
        opacity: [1, 0],
        ...options
      })
    },

    setBottomBar: function (options, target) {
      anime({
        targets: target,
        translateY: [0, -7],
        rotateZ: [0, 225],
        ...options
      })
    }

  },
  computed: {
    animDirection: function () {
      return this.isOpen ? '' : 'reverse'
    }
  }
}
</script>

<style lang="scss" scoped>
.sd--button{
  &:focus{
    outline:none;
  }
  &__flat{
    background: none;
    padding: 16px;
    border-radius: 3px;
  }
}
.sd--hamburger{
  display:flex;
  align-items: stretch;
  height: 16px;
  width: 24px;
  justify-content: space-between;
  flex-direction: column;
  &__bar{
    width: 24px;
    height: 2px;
    background-color: #fff;
    display:block;
    text-align: center;
    font-size: 11px;
  }
}
</style>
