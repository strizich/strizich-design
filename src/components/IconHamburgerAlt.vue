<template>
   <button class="sd--button sd--button__flat" :class="isFocused" @click="toggleOpen">
      <span class="sd--hamburger" :class="isActive">
        <i class="sd--hamburger__bar" :class="`bar--${n}--alt`" v-for="n in 3" :key="n"/>
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
      isOpen: false
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
  watch: {
    active: function (newState, oldState) {
      this.animateHamburger(newState)
    }
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
        duration: 180,
        easing: 'easeInOutQuart'
      })

      if (!open) {
        tl.add({
          targets: '.bar--1--alt',
          keyframes: [
            { rotateZ: 0, translateY: 0, translateX: 0, easing: 'easeOutQuad' },
            { width: 24, easing: 'easeOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--3--alt',
          keyframes: [
            { rotateZ: 0, translateY: 0, translateX: 0, easing: 'easeOutQuad' },
            { width: 24, easing: 'easeOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--2--alt',
          keyframes: [
            { width: 24, translateX: 0, easing: 'easeInQuad' }
          ]
        }, 0).add({
          targets: '.sd--button__flat',
          backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,.1)']
        }, 0)
      } else if (open) {
        tl.add({
          targets: '.bar--1--alt',
          keyframes: [
            { width: 12, easing: 'easeInQuad' },
            { rotateZ: -45, translateY: 7, translateX: -4, easing: 'easeInQuad' }
          ]
        }, 0).add({
          targets: '.bar--3--alt',
          keyframes: [
            { width: 12, easing: 'easeInQuad' },
            { rotateZ: 45, translateY: -7, translateX: -4, easing: 'easeInQuad' }
          ]
        }, 0).add({
          targets: '.bar--2--alt',
          keyframes: [
            { width: 21, translateX: 3, easing: 'easeOutQuad' },
            { translateX: 3 }
          ]
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
    transform-origin: 0% 50%;
  }
  &.is--open{
    transform-origin: 0% 100%;
    .bar{
      &--1--alt{
        transform: translateY(7px) translateX(1px) rotateZ(45deg);
        width: 12px;
      }
      &--2--alt{
        transform: translateX(3px);
        width: 21px;
      }
      &--3--alt{
        transform: translateY(-7px) translateX(1px) rotateZ(-45deg);
        width: 12px;
      }
    }
  }
}
</style>
