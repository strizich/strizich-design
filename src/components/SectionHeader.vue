<template>
  <h2 v-observe-visibility="{
  callback: visibilityChanged,
  intersection: {
    threshold: 1,
    throttle: 300,
    rootMargin: '-250px'
  },
  }"><slot/></h2>
</template>
<script>
import { ObserveVisibility } from 'vue-observe-visibility'

let getChildrenTextContent = (children) => {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

export default {
  name: 'SectionHeader',
  directives: { ObserveVisibility },
  data () {
    return {
      isVisible: false,
      slotContent: ''
    }
  },
  props: {
    disableStore: Boolean
  },
  watch: {
    isVisible (newState, oldState) {
      if (newState && !this.disableStore) {
        this.$store.commit('setSectionTitle', this.slotContent)
      }
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
    }
  },
  mounted () {
    this.slotContent = getChildrenTextContent(this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>

</style>
