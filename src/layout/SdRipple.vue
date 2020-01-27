<template>
  <div
    :class="['sd-ripple', rippleClasses]"
    @touchstart.passive="event => sdEventTrigger && touchStartCheck(event)"
    @touchmove.passive="event => sdEventTrigger && touchMoveCheck(event)"
    @mouseup.passive="event => sdEventTrigger && startRipple(event)">
    <slot/>
    <template v-for="ripple in ripples">
      <sd-wave
        :class="['sd-ripple-wave', waveClasses]"
        :style="ripple.waveStyles"
        @sd-end="clearWave(ripple.uuid)"
        v-if="!isDisabled"
        :key="ripple.uuid"
      />
    </template>
  </div>
</template>

<script>
import raf from 'raf'
import SdWave from '@/layout/SdWave'
import sdUuid from '@/utilities/SdUuid.js'

export default {
  name: 'SdRipple',
  components: { SdWave },
  props: {
    sdActive: null,
    sdDisabled: Boolean,
    sdCentered: Boolean,
    sdEventTrigger: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      ripples: [],
      touchTimeout: null,
      eventType: null
    }
  },
  computed: {
    isDisabled: function () {
      return this.sdDisabled
    },
    rippleClasses: function () {
      return {
        'is--disabled': this.disabled
      }
    },
    waveClasses: function () {
      return {
        'is--centered': this.centered
      }
    }
  },
  watch: {
    sdActive (active) {
      const isBoolean = typeof active === 'boolean'
      const isEvent = active.constructor.toString().match(/function (\w*)/)[1].toLowerCase() === 'mouseevent'
      if (isBoolean && this.sdCentered && active) {
        this.startRipple({
          type: 'mousedown'
        })
      } else if (isEvent) {
        this.startRipple(active)
      }
      this.$emit('update:sdActive', false)
    }
  },
  methods: {
    touchMoveCheck: function () {
      window.clearTimer(this.touchTimeout)
    },
    touchStartCheck: function ($event) {
      this.touchTimeout = window.setTimeout(() => {
        this.startRipple($event)
      }, 100)
    },
    startRipple: function ($event) {
      raf(() => {
        const { eventType, isDisabled, sdCentered } = this
        if (!isDisabled && (!eventType || eventType === $event.type)) {
          let size = this.getSize()
          let position = null

          if (sdCentered) {
            position = this.getCenterPosition(size)
          } else {
            position = this.getHitPosition($event, size)
          }

          this.eventType = $event.type

          this.ripples.push({
            waveStyles: this.applyStyles(position, size),
            uuid: sdUuid()
          })
        }
      })
    },
    applyStyles: function (position, size) {
      size += 'px'
      return {
        ...position,
        width: size,
        height: size
      }
    },
    clearWave: function (uuid) {
      if (uuid) {
        this.ripples = this.ripples.filter(ripple => ripple.uuid !== uuid)
      } else {
        this.ripples = []
      }
    },
    getSize: function () {
      const { offsetWidth, offsetHeight } = this.$el
      return Math.round(Math.max(offsetWidth, offsetHeight))
    },
    getCenterPosition (size) {
      const halfSize = -size / 2 + 'px'
      return {
        'margin-top': halfSize,
        'margin-left': halfSize
      }
    },
    getHitPosition ($event, elementSize) {
      const rect = this.$el.getBoundingClientRect()
      let top = $event.pageY
      let left = $event.pageX

      if ($event.type === 'touchstart') {
        top = $event.changeTouches[0].pageY
        left = $event.changeTouches[0].pageX
      }

      return {
        top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
        left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
  .sd-ripple {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
    mask-image: radial-gradient(circle, #fff 100%, #000 100%);
    -webkit-mask-image: radial-gradient(circle, #fff 100%, #000 100%);
  }
  .sd-ripple-wave {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: var(--primary);
    border-radius: 50%;
    opacity: 1;
    transition: all .8s ease-in-out;
    transform: scale(2);
    &.is--centered {
      animation-duration: 1.2s;
      top: 50%;
      left: 50%;
    }
    ~ *:not(.sd-ripple-wave) {
      position: relative;
      z-index: 2;
    }
  }
</style>
