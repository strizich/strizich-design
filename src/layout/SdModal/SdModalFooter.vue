<template>
  <div class="sd--modal__footer">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdModalFooter'
}
</script>

<style lang="scss" scoped>
.sd--modal{
  &__footer{
    padding: 8px 16px;
    display: flex;
    align-content: center;
    width: 100%;
    justify-content: flex-end;
    background: var(--background-opaque);
    border-top: 1px solid var(--background-highlight);
    border-radius: 0 0 3px 3px;
    backdrop-filter: blur(20px);
  }
}
</style>
