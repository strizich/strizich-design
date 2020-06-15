<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer--left">
        <slot name="start"/>
      </div>
      <div class="footer--right">
        <slot name="end"/>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  .footer{
    padding: 16px;
    background: var(--background-accent);
    box-shadow: 0 -1px 0 0 var(--divider);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    &__wrapper{
      display:flex;
      justify-content: space-between;
    }
  }
</style>
