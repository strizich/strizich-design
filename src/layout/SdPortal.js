import Vue from 'vue'
import raf from 'raf'

export default {
  name: 'SdPortal',
  abstract: true,
  data () {
    return {
      leaveTimeout: null,
      parentEl: null
    }
  },
  props: {
    attachToParent: Boolean,
    target: {
      type: null,
      validator (value) {
        if (HTMLElement && value && value instanceof HTMLElement) {
          return true
        }

        Vue.util.warn('The target element prop is invalid. Must target a valid HTMLElement.', this)

        return false
      }
    }
  },
  computed: {
    transitionName: function () {
      const childrenComponent = this._vnode.componentOptions.children[0]

      if (childrenComponent) {
        const transition = childrenComponent.data.transition

        if (transition) {
          return transition.name
        } else {
          const transition = childrenComponent.componentOptions.propsData.name

          if (transition) {
            return transition
          }
        }
      }
      return 'v'
    },
    leaveClass: function () {
      return this.transitionName + '__leave'
    },
    leaveActiveClass: function () {
      return this.transitionName + '__leave-active'
    },
    leaveToClass: function () {
      return this.transitionName + '__leave-to'
    }
  },
  watch: {
    target: function (newTarget, oldTarget) {
      this.changeParentEl(newTarget)
      if (oldTarget) {
        this.$forceUpdate()
      }
    }
  },
  methods: {
    getTransitionDuration: function (el) {
      const duration = window.getComputedStyle(el).transitionDuration
      const num = parseFloat(duration, 10)
      let unit = duration.match(/m?s/)
      if (unit) {
        unit = unit[0]
      }
      if (unit === 's') {
        return num * 1000
      }

      if (unit === 'ms') {
        return num
      }

      return 0
    },
    killGhostElement: function (el) {
      if (el.parentNode) {
        this.changeParentEl(this.parentNode)
        this.$options._parentElm = this.originalParentEl
        el.parentNode.removeChild(el)
      }
    },
    initDestroy: function (manualCall) {
      let el = this.$el

      if (manualCall && this.$el.nodeType === Node.COMMENT_NODE) {
        el = this.$vnode.elm
      }
      el.classList.add(this.leaveClass)
      el.classList.add(this.leaveActiveClass)

      this.$nextTick().then(() => {
        el.classList.add(this.leaveToClass)
        clearTimeout(this.leaveTimeout)
        this.leaveTimeOut = setTimeout(() => {
          this.destoryElement(el)
        }, this.getTransitionDuration(el))
      })
    },
    destoryElement: function (el) {
      raf(() => {
        el.classList.remove(this.leaveClass)
        el.classList.remove(this.leaveActiveClass)
        el.classList.remove(this.leaveToClass)
        this.$emit('sd-destroy')
        this.killGhostElement(el)
      })
    },
    changeParentEl: function (newTarget) {
      newTarget && newTarget.appendChild(this.$el)
    }
  },
  mounted () {
    if (!this.parentEl) {
      this.parentEl = this.$el.parentNode
      this.$emit('sd-orignal-parent', this.$el.parentNode)
    }
  },
  beforeDestroy () {
    if (this.$el.classList) {
      this.initDestroy()
    } else {
      this.killGhostElement(this.$el)
    }
  },
  render (createElement) {
    const defaultSlot = this.$slots.defaultSlot[0]
    if (defaultSlot && defaultSlot[0]) {
      return defaultSlot[0]
    }
  }
}
