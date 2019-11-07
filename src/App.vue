<template>
  <div id="app">
    <the-header/>
    <main class="app__content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import '@/layout/scss'
import TheHeader from '@/layout/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>
<style lang="scss">
  @import './layout/scss/functions';
  body, html{
    background: v(--background);
    color: v(--text);
  }
  .app{
    &__content{
      @supports (padding: max(32px, 32px)) {
        margin:
        16px
        m#{a}x(16px, env(safe-area-inset-left))
        16px
        m#{a}x(16px, env(safe-area-inset-right));
      }
      padding:rem(16);
    }
  }
</style>
