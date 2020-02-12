<template>
  <h2 :id="id" :class="['section-header', classes]">
    <span class="section-header__content">
      <slot/>
    </span>
    <sd-button icon-only size="lg" flat @click="copyLink" rounded>
      <sd-icon name="link"/>
    </sd-button>
  </h2>
</template>
<script>
import SdButton from '@/layout/SdButton'
import SdIcon from '@/layout/SdIcon'
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
        return
      }
      const link = this.computedLink
      try {
        navigator.clipboard.writeText(link)
      } catch (err) {

      }
    }
  },
  created () {
    this.slotContent = getChildrenTextContent(this.$slots.default)
  },
  components: {
    SdButton,
    SdIcon
  }
}
</script>

<style lang="scss" scoped>
  .section-header{
    margin-top: 64px;
    font-size: 24px;
    font-weight: 500;
    position: relative;
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;
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
