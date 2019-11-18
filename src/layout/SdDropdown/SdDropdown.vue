<template>
  <div class="sd--dropdown" v-on="$listeners">
    <slot/>
  </div>
</template>

<script>
import SdPropValidator from '@/utilities/SdPropValidator.js'

export default {
  name: 'SdDropdown',
  props: {
    active: Boolean,
    alignTrigger: Boolean,
    offsetX: Number,
    offsetY: Number,
    fullWidth: Boolean,
    dense: Boolean,
    direction: {
      type: String,
      default: 'dropdown',
      ...SdPropValidator('direction', ['dropdown', 'dropup'])
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md',
      ...SdPropValidator('size', ['sm', 'md', 'lg'])
    }
  },
  data () {
    return {
      sdDropdown: {
        instance: this,
        active: this.active,
        direction: this.direction,
        alignTrigger: this.alignTrigger,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        fullWidth: this.fullWidth,
        dense: this.dense,
        closeOnSelect: this.closeOnSelect,
        closeOnClick: this.closeOnClick,
        bodyClickObserver: null,
        windowResizeEvent: null,
        $el: this.$el
      }
    }
  },
  provide () {
    return {
      sdDropdown: this.SdDropdown
    }
  },
  computed: {
    isActive () {
      return this.sdDropdown.active
    }
  },
  watch: {
    active: {
      immediate: true,
      handler (isActive) {
        this.sdDropdown.active = isActive
      }
    },
    direction (direction) {
      this.sdDropdown.direction = direction
    },
    size (size) {
      this.sdDropdown.size = size
    },
    alignTrigger (aligned) {
      this.sdDropdown.alignTrigger = aligned
    },
    offsetX (offset) {
      this.sdDropdown.offsetX = offset
    },
    offsetY (offset) {
      this.sdDropdown.offsetX = offset
    },
    isActive (isActive) {
      if (!isActive) {
        this.$emit('sd-closed')
      } else {
        this.$emit('sd-opened')
      }
    },
    closeOnSelect () {
      this.sdDropdown.closeOnSelect
    }
  },
  methods: {
    toggleContent: function () {
      this.sdDropdown.aligned = !this.sdDropdown.active
    }
  },
  mounted () {
    this.SdDropdown.$el = $el

    this.$nextTick().then(() => {
      this.triggerEl = this.$el.querySelector('[sd-dropdown-trigger]')
      if (this.triggerEl) {
        this.triggerEl.addEventListener('click', this.toggleContent)
      }
    })
  },
  beforeDestroy () {
    if (this.triggerEl) {
      this.triggerEl.removeEventListener('click', this.toggleContent)
    }
  }
}
</script>

<style lang="scss" >
  .sd--dropdown{
    display: inline-block;
    &__trigger{
      margin: 0;
    }
  }
</style>
