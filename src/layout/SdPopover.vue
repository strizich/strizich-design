<script>
import Popper from 'popper.js'
import deepmerge from 'deepmerge'
import SdPortal from '@/layout/SdPortal.js'

export default {
  name: 'SdPopover',
  abstract: true,
  components: { SdPortal },
  props: {
    active: Boolean,
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      popperInstance: null,
      originalParent: null,
      shouldRender: false,
      shouldActivate: false
    }
  },
  computed: {
    popoverClasses: function () {
      return {
        'is--active': this.shouldRender,
        'is--rendering': this.shouldRender
      }
    }
  },
  watch: {
    active: {
      immediate: true,
      handler (shouldRender) {
        this.shouldRender = shouldRender

        if (shouldRender) {
          this.bindPopper()
        } else {
          this.shouldActivate = false
        }
      }
    },
    settings () {
      if (this.popperInstance) {
        this.createPopper()
      }
    }
  },
  methods: {
    setOriginalParent (el) {
      if (!this.originalParent) {
        this.originalParent = el
      }
    },
    getPopperOptions: function () {
      return {
        placement: 'bottom',
        modifiers: {
          preventOverflow: {
            boundriesElement: 'viewport',
            padding: 16
          },
          computeStyle: {
            enabled: true,
            gpuAcceleration: false
          }
        },
        onCreate: () => {
          this.shouldActivate = true
          this.$emit('active')
        }
      }
    },
    bindPopper: function () {
      this.$nextTick().then(() => {
        if (this.originalParent) {
          this.createPopper()
        }
      })
    },
    createPopper: function () {
      if (this.settings) {
        const options = deepmerge(this.getPopperOptions(), this.settings)
        if (this.$el.nodeType !== Node.COMMENT_NODE) {
          this.popperInstance = new Popper(this.originalParent, this.$el, options)
        }
      }
    },
    killPopper: function () {
      if (this.popperInstance) {
        this.popperInstance.destroy()
        this.popperInstance = null
      }
    },
    resetPopper: function () {
      if (this.popperInstance) {
        this.killPopper()
        this.createPopper()
      }
    }
  },
  mounted () {
    this.resetPopper()
  },
  beforeDestroy () {
    this.killPopper()
  },
  render (createElement) {
    return createElement(SdPortal, {
      props: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        'sd-original-parent': this.setOriginalParent,
        'sd-destroy': this.killPopper
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
  .sd--popover {
    &.is--rendering{
      opacity: 0;
      transition: none;
    }
  }
</style>
