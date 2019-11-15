<template>
  <sd-popover :settings="popperSettings" :active="shouldRender">
    <transition duration="300" v-if="shouldRender" @enter="enter" @leave="enter">
      <div :class="['sd--tooltip', tooltipClasses, themeClasses]" :style="[tooltipStyles, animationSetup]">
        <slot />
      </div>
    </transition>
  </sd-popover>
</template>

<script>
import SdPopover from '@/layout/SdPopover'
import SdPropValidator from '@/utilities/SdPropValidator.js'
import anime from 'animejs'

export default {
  name: 'SdTooltip',
  components: { SdPopover },
  props: {
    active: Boolean,
    theme: String,
    delay: {
      type: [String, Number],
      default: 0
    },
    direction: {
      type: String,
      default: 'bottom',
      ...SdPropValidator('direction', ['top', 'bottom', 'left', 'right'])
    }
  },
  data () {
    return {
      shouldRender: false,
      targetEl: null,
      animationSetup: {}
    }
  },
  computed: {
    tooltipClasses: function () {
      return `sd--tooltip--${this.direction}`
    },
    themeClasses: function () {
      return this.theme ? `sd--tooltip__${this.theme}` : ''
    },
    tooltipStyles: function () {
      return `transition-delay: ${this.delay}`
    },
    popperSettings: function () {
      return {
        placement: this.direction,
        modifiers: {
          offsets: {
            offset: '0, 16'
          }
        }
      }
    }
  },
  watch: {
    active () {
      this.shouldRender = this.active
    },
    shouldRender (shouldRender) {
      this.$emit('update:active', shouldRender)
    }
  },
  methods: {
    show: function () {
      this.shouldRender = true
    },
    hide: function () {
      this.shouldRender = false
    },
    beforeEnter: function () {
      this.animationSetup = {
        'opacity': 0,
        'transform': 'scale(0.5)'
      }
    },
    enter: function () {
      anime({
        targets: '.sd--tooltip',
        keyframes: [
          {
            translateY: 16,
            opacity: 0,
            scale: 0.5
          },
          {
            translateY: 0,
            opacity: 1,
            scale: 1
          }
        ]
      })
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      this.shouldRender = this.active
      this.targetEl = this._vnode.componentInstance.originalParent

      if (this.targetEl) {
        this.targetEl.addEventListener('mouseenter', this.show, false)
        this.targetEl.addEventListener('mouseleave', this.hide, false)
      }
    })
  },
  beforeDestroy () {
    if (this.targetEl) {
      this.targetEl.removeEventListener('mouseenter', this.show)
      this.targetEl.removeEventListener('mouseleave', this.hide)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './scss/colors';
@import './SdElevation/elevation';

.sd--tooltip {
    height: 32px;
    padding: 0 8px;
    position: fixed;
    z-index: 111;
    pointer-events: none;
    border-radius: 2px;
    transition-property: opacity, transform;
    will-change: opacity, transform, top, left !important;
    font-size: 14px;
    line-height: 32px;
    text-transform: none;
    white-space: nowrap;
    opacity:1;
    background-color: var(--background-variant);
    @include sd--elevation(6);
    &.v-enter{
      transform: scale(0.5);
      opacity: 0;
    }
    @each $state, $color in $sd-color-global {
    $default: nth($color, 1);
    $variant: nth($color, 2);
    $contrast: sd-pick-contrast($default);
      &__#{$state} {
        background-color: $default;
      }
    }
  }
</style>
