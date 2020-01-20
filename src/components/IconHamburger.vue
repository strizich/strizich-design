<template>
   <button class="sd--button sd--button__flat" :class="isFocused" @click="toggleOpen">
      <span class="sd--hamburger" :class="isActive">
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
    active: [Boolean, String],
    animated: {
      type: Boolean,
      default: true
    }
  },
  mounted () {

  },
  methods: {
    toggleOpen: function () {
      this.isOpen = !this.isOpen
      if (this.animated) {
        this.animateHamburger(this.isOpen)
      }
      this.$emit('toggle:menu', this.isOpen)
    },

    animateHamburger: function (open) {
      const tl = anime.timeline({
        duration: 500,
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
    },
    isActive: function () {
      return {
        'is--open': this.isOpen
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sd--button{
  display:flex;
  align-items: center;
  justify-content: center;
  &:focus{
    outline:none;
  }
  &.is--focused{
    box-shadow: inset 0 0 0 4px var(--primary-accent);
  }
  &__flat{
    background: none;
    height: 50px;
    width: 50px;
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
    background-color: var(--background-inverse);
    display:block;
    text-align: center;
    font-size: 11px;
  }
  &.is--open{
    .bar{
      &--1{
        transform: translateY(7px) rotateZ(-225deg);
      }
      &--2{
        opacity: 0;
      }
      &--3{
        transform: translateY(-7px) rotateZ(225deg);
      }
    }
  }
}
</style>
