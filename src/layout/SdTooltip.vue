<template>
  <sd-popover :settings="popperSettings" :active="shouldRender">
    <transition v-if="shouldRender">
      <div :class="['sd--tooltip', tooltipClasses, themeClasses]" :style="tooltipStyles">
        <slot />
      </div>
    </transition>
  </sd-popover>
</template>

<script>
import SdPopover from '@/layout/SdPopover'
import SdPropValidator from '@/utilities/SdPropValidator.js'
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
      targetEl: null
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
          offset: {
            offset: '0, 16'
          }
        },
        computeStyle: {
          gpuAcceleration: false,
          enabled: true
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

.sd--tooltip {
    height: 32px;
    padding: 0 8px;
    position: fixed;
    z-index: 111;
    pointer-events: none;
    border-radius: 2px;
    transition: .6s ease-in;
    transition-property: opacity, transform;
    will-change: opacity, transform, top, left !important;
    font-size: 14px;
    line-height: 32px;
    text-transform: none;
    white-space: nowrap;
    background-color: green;
    @each $state, $color in $sd-color-global {
    $default: nth($color, 1);
    $variant: nth($color, 2);
    $contrast: sd-pick-contrast($default);
      &__#{$state} {
        background-color: $default;
      }
    }
    &.v-enter-active {
        transform: translate3d(0, -4px, 0) scale(0);
    }
    &.v-enter,
    &.v-leave-active {
      opacity: 0;
      &.sd--tooltip--top {
        transform: translate3d(0, 4px, 0) scale(0.5);
      }
      &.sd--tooltip--right {
        transform: translate3d(-4px, 0, 0) scale(0.5);
      }
      &.sd--tooltip--bottom {
        transform: scale(0.5);
      }
      &.sd--tooltip--left {
        transform: translate3d(4px, 0, 0) scale(0.5);
      }
    }
  }
</style>
