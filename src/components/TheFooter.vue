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
  @import '../layout/scss/mixins';
  @import '../layout/scss/breakpoints';
  .footer{
    padding: 16px;
    background: var(--background-accent);
    position:absolute;
    bottom: 0;
    left: 0;
    right: 0;
    &__wrapper{
      display:flex;
      @include iosSafeArea;
      justify-content: space-between;
      @include breakpoint-down(sm){
        flex-direction: column;
        justify-content: flex-start;
      }
    }
  }
</style>
