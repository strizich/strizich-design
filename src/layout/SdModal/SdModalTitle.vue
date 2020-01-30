<template>
  <div class="sd--modal__header">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdModalTitle'
}
</script>

<style lang="scss" scoped>
  .sd--modal{
    &__header{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      border-top: 1px solid var(--background-highlight);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      background-color: var(--background-opaque);
      & > h3 {
        font-size: 24px;
        margin: 0;
      }
    }
  }
</style>
