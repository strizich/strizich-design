<template>
  <sd-portal>
    <transition name="sd-dialog">
      <div
        :class="['sd--dialog', classes, sizeClass ]"
        v-on="$listeners"
        @keydown.esc="onEsc"
        v-if="active"
        >
        <sd-focus-trap>
          <div class="sd--dialog__container">
            <slot />
            <keep-alive>
              <sd-overlay
                :class="backdropClass"
                :blur="backdropBlur"
                :active="active"
                @click="onOutsideClick"
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
      name: 'SdDialog'
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
      default: 'sd--dialog__overlay'
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
      default: 'md'
    },
    fullscreen: {
      type: Boolean,
      default: true
    },
    aside: Boolean
  },
  watch: {
    active (isActive) {
      this.$nextTick().then(() => {
        if (isActive) {
          document.body.classList.add('sd--dialog--open')
          document.body.style.top = `-${window.scrollY}px`
          document.body.style.position = 'fixed'
          document.body.style.left = '0'
          document.body.style.right = '0'
          this.$emit('sd-opened')
        } else {
          const scrollY = document.body.style.top
          document.body.classList.remove('sd--dialog--open')
          document.body.removeAttribute('style')
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
    onOutsideClick: function () {
      if (this.clickOutsideToClose) {
        this.closeModal()
      }
      this.$emit('clicked-outside')
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
        'is--aside': this.aside,
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

<style lang="scss">
  .sd--dialog{
    &--open{
      @include breakpoint-up('sm') {
        padding-right: 10px;
      }
    }
    min-width: 300px;
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
    transition: opacity .2s ease-in-out,
                transform .2s  ease-in-out;
    will-change: opacity, transform, left, top;
    &__container{
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      flex: 1;
      &:focus{
        outline: none;
      }
    }
    &.sd-dialog-enter {
      opacity: 0;
      transform: translate(-50%, -48%);
    }
    &.sd-enter-active, &.sd-dialog-leave-active {
      opacity: 0;
      transform: translate(-50%, -52%);
    }
    &.is{
      &--sm{
        width: 25%;
      }
      &--md{
        width: 60%;
        height: 80%;
        &.is--aside{
          width: 40%
        }
      }
      &--lg{
        width: 90%;
        &.is--aside{
          width: 70%
        }
      }
      &--fullscreen{
        @include breakpoint-down('sm'){
          max-width: 100%;
          max-height: 100%;
          min-width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 0;
          transform: none;
          &.sd-modal-enter {
            opacity: 0;
            transform: translate3D(0, 100%, 0);
          }
          &.sd-modal-leave-active {
            opacity: 0;
            transform: translate3D(0, -100%, 0);
          }
        }
      }
      &--aside{
        min-height: 100%;
        left: 100%;
        top:0;
        bottom:0;
        right: 0;
        transform: translate3D(-100%, 0, 0);
        overflow: hidden;
        transition: opacity .2s ease-in-out,
                    transform .2s ease-in-out;
        @include breakpoint-down('sm'){
          left: 0;
          right: 0;
          top:0;
          bottom:0;
          min-width: 100%;
          transform: none;
          opacity: 1;
           &.sd-dialog-enter, &.sd-dialog-leave-active {
            opacity: 0;
            transform: translate3D(-10px, 0, 0);
           }
        }
        &.sd-dialog-enter, &.sd-dialog-leave-active  {
          opacity: 1;
          transform: translate3D(0, 0, 0);
        }
        .sd--dialog__content{
          // min-height: 100%;
          flex-grow: 3;
          max-height: 100%;
        }
      }
    }
  }
</style>
