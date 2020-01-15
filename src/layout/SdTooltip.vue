<template>
  <sd-popover :settings="popperSettings" :active="shouldRender">
    <transition duration="260" v-if="shouldRender" @enter="enter" @leave="leave">
      <div :class="['sd--tooltip', tooltipClasses, themeClasses]" :style="tooltipStyles">
        <span class="sd--tooltip__content">
          <slot />
        </span>
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
  data () {
    return {
      shouldRender: false,
      targetEl: null
    }
  },
  props: {
    active: Boolean,
    theme: String,
    delay: {
      type: [String, Number],
      default: 0
    },
    direction: {
      type: String,
      default: 'top',
      ...SdPropValidator('direction', ['top', 'bottom', 'left', 'right'])
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
    enter: function (done) {
      const timeline = anime.timeline({
        delay: this.delay,
        complete: (anim) => { done = anim }
      })
      timeline.add({
        targets: '.sd--tooltip__content',
        delay: this.delay,
        opacity: [0, 1]
      }).add({
        targets: '.sd--tooltip',
        opacity: [0, 1],
        scale: [0, 1]
      }, 100)
    },
    leave: function (done) {
      const timeline = anime.timeline({
        delay: this.delay,
        complete: (anim) => { done = anim }
      })
      timeline.add({
        targets: '.sd--tooltip__content',
        delay: this.delay,
        opacity: [1, 0]
      }).add({
        targets: '.sd--tooltip',
        opacity: [1, 0],
        scale: [1, 0]
      }, 100)
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
  },
  components: { SdPopover }
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
    font-size: 14px;
    line-height: 32px;
    text-transform: none;
    white-space: nowrap;
    background-color: var(--background-highlight);
    @include sd--elevation(6);
    &.v-enter{
      transform: scale(0);
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
