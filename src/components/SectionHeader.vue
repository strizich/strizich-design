<template>
  <h2 :id="id" :class="['sd--text__header', classes]">
    <span><slot/></span>
    <sd-button size="sm" flat @click="copyLink">Copy</sd-button>
  </h2>
</template>
<script>
import SdButton from '@/layout/SdButton'
import getChildrenTextContent from '@/utilities/SdSlotContent'
export default {
  name: 'SectionHeader',
  data () {
    return {
      isVisible: false,
      slotContent: ''
    }
  },
  props: {
    id: String
  },
  computed: {
    classes: function () {
      return {
        'is--visible': this.isVisible
      }
    },
    computedLink: function () {
      // const protocol = window.location.protocol
      const host = window.location.host
      const currentRoute = this.$route.path
      return `${host}${currentRoute}#${this.id}`
    }
  },
  methods: {
    copyLink: function () {
      if (!navigator.clipboard) {
        console.error('Clipboard API unavailable')
        return
      }
      const link = this.computedLink
      try {
        navigator.clipboard.writeText(link)
        console.log('Copied')
      } catch (err) {
        console.log('uhoh', err)
      }
    }
  },
  created () {
    this.slotContent = getChildrenTextContent(this.$slots.default)
  },
  components: {
    SdButton
  }
}
</script>

<style lang="scss" scoped>
  .sd--text__header{
    margin-top: 64px;
    font-size: 24px;
    font-weight: 500;
    position: relative;
    justify-content: space-between;
    display: flex;
     &:after{
        content: '';
        display:block;
        position: absolute;
        left: 100%;
        bottom:0;
        right: 0;
        height: 1px;
        background-image: sd-gradient(var(--background-accent), var(--background-highlight),45deg);
        transition: all .23s ease-in-out;
      }
    &.is--visible {
      &:after{
        left: 15%;
      }
    }
  }
</style>
