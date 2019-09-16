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
      padding:rem(16);
    }
  }
</style>
