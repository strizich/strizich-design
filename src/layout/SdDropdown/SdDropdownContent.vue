<template>
  <sd-popover :settings="popperSettings" :active="shouldRender">
     <transition duration="300" v-if="shouldRender" @enter="enter" @leave="leave">
    <div class="sd--dropdown__content">
      <slot/>
    </div>
     </transition>
  </sd-popover>
</template>

<script>
import SdPopover from '@/layout/SdPopover'
import SdPropValidator from '@/utilities/SdPropValidator.js'
import anime from 'animejs'

export default {
  name: 'SdDropdown',
  data () {
    return {
      shouldRender: false,
      targetEl: null
    }
  },
  props: {
    active: Boolean,
    delay: {
      type: [String, Boolean],
      default: 0
    },
    direction: {
      type: String,
      default: 'downdown',
      ...SdPropValidator('direction', ['dropdown', 'dropup'])
    }
  },
  computed: {
    dropdownClasses: function () {
      return `sd--dropdown--${this.direction}`
    }
  },
  components: { SdPopover }
}
</script>

<style lang="scss" scoped>

</style>
