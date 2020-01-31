<template>
  <sd-portal>
    <transition name="sd-modal">
      <div
        :class="['sd--modal', 'sd--elevation--24', sizeClass, classes]"
        v-on="$listeners"
        @keydown.esc="onEsc"
        v-if="active"
        >
        <sd-focus-trap>
          <div class="sd--modal__container">
            <slot />
            <keep-alive>
              <sd-overlay
                :class="backdropClass"
                :blur="backdropBlur"
                :active="active"
                @click="onClick"
                v-if="backdrop"
                fixed />
            </keep-alive>
          </div>
        </sd-focus-trap>
      </div>
    </transition>
  </sd-portal>
</template>

<script>
import '@/layout/SdElevation'
import SdPortal from '@/layout/SdPortal'
import SdFocusTrap from '@/layout/SdFocusTrap'
import SdOverlay from '@/layout/SdOverlay/SdOverlay'
export default {
  data () {
    return {
      name: 'SdModal'
    }
  },
  props: {
    active: Boolean,
    backdrop: {
      type: Boolean,
      default: true
    },
    backdropClass: {
      type: String,
      default: 'sd--modal__overlay'
    },
    backdropBlur: Boolean,
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'lg'
    },
    fullscreen: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    active (isActive) {
      this.$nextTick().then(() => {
        if (isActive) {
          document.body.style.top = `-${window.scrollY}px`
          document.body.style.position = 'fixed'
          document.body.style.left = '0'
          document.body.style.right = '0'
          this.$emit('sd-opened')
        } else {
          const scrollY = document.body.style.top
          document.body.style.position = ''
          document.body.style.top = ''
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
          this.$emit('sd-closed')
        }
      })
    }
  },
  methods: {
    closeModal: function () {
      this.$emit('update:active', false)
    },
    onClick: function () {
      if (this.clickOutsideToClose) {
        this.closeModal()
      }
      this.$emit('sd-clicked-outside')
    },
    onEsc: function () {
      if (this.closeOnEsc) {
        this.closeModal()
      }
    }
  },
  computed: {
    classes: function () {
      return {
        'is--fullscreen': this.fullscreen
      }
    },
    sizeClass: function () {
      return `is--${this.size}`
    }
  },
  components: {
    SdFocusTrap,
    SdPortal,
    SdOverlay
  }
}
</script>

<style lang="scss" scoped>
  .sd--modal{
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    flex-direction: row;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1100;
    border-radius: 2px;
    backface-visibility: hidden;
    pointer-events: auto;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    transition: opacity .15s .1s ease-in-out,
                transform .2s .1s  ease-in-out;
    will-change: opacity, transform, left, top;
    &__container{
      display: flex;
      flex-flow: column;
      flex: 1;
    }
    &.sd-modal-enter {
      opacity: 0;
      transform: translate(-50%, -50%) scale(.75);
    }
    &.sd-enter-active, &.sd-modal-leave-active {
      opacity: 0;
      transform: translate(-50%, -50%) scale(.9);
    }
    &.is{
      &--fullscreen{
        @include breakpoint-down('sm'){
          max-width: 100%;
          max-height: 100%;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 0;
          transform: none;
          &.sd-modal-enter {
            opacity: 0;
            transform: translate3D(0, 30%, 0);
          }
          &.sd-modal-leave-active {
            opacity: 0;
            transform: translate3D(0, 0, 0);
          }
        }
      }
    }
  }
</style>
