<template>
  <div :class="['sd--modal__content', sizeClass]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdModalContent',
  props: {
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    sizeClass: function () {
      return `is--${this.size}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .sd--modal__content{
    background-color: var(--background);
    padding: 16px;
    flex-grow: 2;
    @include breakpoint-up('md'){
      max-height: 600px;
    }
    overflow-y: auto;
    overflow-x:hidden;
  }
</style>
