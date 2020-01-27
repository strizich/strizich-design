<template>
  <sd-popover :settings="popperSettings" :active="shouldRender">
    <transition name="pop" v-if="shouldRender">
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
      default: 100
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
            offset: '0, 32'
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
.pop-enter{
  opacity: 0;
  transform: translateY(8px);
}
.pop-enter-after, .pop-leave{
  opacity: 1;
  transform: translateY(-16px);
}
.pop-leave-to{
  opacity: 0;
  transform: translateY(-8px);
}

.sd--tooltip {
    transition: all .23s ease-in-out;
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
