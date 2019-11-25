<template>
   <button class="sd--button sd--button__flat" :class="isFocused" @click="setAnimation">
      <span class="sd--hamburger">
        <i class="sd--hamburger__bar" :class="`bar--${n}`" v-for="n in 3" :key="n"/>
      </span>
    </button>
</template>

<script>
import anime from 'animejs'
import SdFocused from '@/core/mixins/SdFocused'
export default {
  name: 'IconHamburger',
  data () {
    return {
      isOpen: this.active
    }
  },
  mixins: [ SdFocused ],
  props: {
    active: [Boolean, String]
  },
  mounted () {
    this.animateHamburger(this.isOpen || this.active)
  },
  methods: {
    toggleOpen: function () {
      this.isOpen = !this.isOpen
      this.$emit('toggle:menu', this.isOpen)
    },
    setAnimation: function () {
      this.toggleOpen()
      this.animateHamburger(this.isOpen)
    },

    animateHamburger: function (open) {
      const tl = anime.timeline({
        duration: 600,
        easing: 'easeInOutQuart'
      })

      if (!open) {
        tl.add({
          targets: '.bar--1',
          translateY: [7, 0],
          rotateZ: [-225, 0]
        }, 0).add({
          targets: '.bar--2',
          opacity: [0, 1]
        }, 0).add({
          targets: '.bar--3',
          translateY: [-7, 0],
          rotateZ: [225, 0]
        }, 0).add({
          targets: '.sd--button__flat',
          backgroundColor: ['rgba(0,0,0,.1)', 'rgba(0,0,0,0)']
        }, 0)
      } else if (open) {
        tl.add({
          targets: '.bar--1',
          translateY: [0, 7],
          rotateZ: [0, -225]
        }, 0).add({
          targets: '.bar--2',
          opacity: [1, 0]
        }, 0).add({
          targets: '.bar--3',
          translateY: [0, -7],
          rotateZ: [0, 225]
        }, 0).add({
          targets: '.sd--button__flat',
          backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,.1)']
        }, 0)
      }
      console.log(open)
    }
  },
  computed: {
    animDirection: function () {
      return this.isOpen ? '' : 'reverse'
    },
    isFocused: function () {
      return {
        'is--focused': this.sdHasFocus
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sd--button{
  &:focus{
    outline:none;
  }
  &.is--focused{
    box-shadow: inset 0 0 0 4px var(--primary-darker);
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
