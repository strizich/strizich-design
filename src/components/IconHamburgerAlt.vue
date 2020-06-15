<template>
   <button
   :class="['sd--button', 'sd--button__flat', isFocused]"
   type="menu"
   @click="toggleOpen">
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
      if (this.animated) {
        this.animateHamburger(this.active)
      }
      this.$emit('toggle:menu', this.active)
    },
    animateHamburger: function (open) {
      const tl = anime.timeline({
        duration: 250,
        easing: 'easeInOutQuart'
      })
      if (!open) {
        tl.add({
          targets: '.bar--1',
          keyframes: [
            { rotateZ: 0, translateY: 0, translateX: 0, easing: 'easeInOutQuad' },
            { width: 24, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--3',
          keyframes: [
            { rotateZ: 0, translateY: 0, translateX: 0, easing: 'easeInOutQuad' },
            { width: 24, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--2',
          keyframes: [
            { width: 24, translateX: 0, easing: 'easeInOutQuad' }
          ]
        }, 0)
      } else if (open) {
        tl.add({
          targets: '.bar--1',
          keyframes: [
            { width: 12, easing: 'easeInOutQuad' },
            { rotateZ: -45, translateY: 7, translateX: -4, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--3',
          keyframes: [
            { width: 12, easing: 'easeInOutQuad' },
            { rotateZ: 45, translateY: -7, translateX: -4, easing: 'easeInOutQuad' }
          ]
        }, 0).add({
          targets: '.bar--2',
          keyframes: [
            { width: 21, translateX: 3, easing: 'easeInOutQuad' },
            { translateX: 3 }
          ]
        }, 0)
      }
    }
  },
  computed: {
    isFocused: function () {
      return {
        'is--focused': this.sdHasFocus,
        'is--hover': this.isHovering
      }
    },
    isActive: function () {
      return {
        'is--open': this.active
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
  border: none;
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
      &--1{
        transform: translateY(7px) translateX(1px) rotateZ(45deg);
        width: 12px;
      }
      &--2{
        transform: translateX(3px);
        width: 21px;
      }
      &--3{
        transform: translateY(-7px) translateX(1px) rotateZ(-45deg);
        width: 12px;
      }
    }
  }
}
</style>
