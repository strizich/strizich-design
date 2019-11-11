<template>
  <sd-layout id="app">
    <the-header/>

    <div class="app__content">
      <router-view/>
    </div>

    <the-footer align="space-between">
      <template v-slot:start>
        <strong class="text__footnote">Made with love.</strong>
      </template>

      <template v-slot:end>
        <small class="text__footnote">Powered by: <em>VueJS</em> and <em>GraphCMS</em></small>
      </template>
    </the-footer>
  </sd-layout>
</template>

<script>
import '@/layout/scss'
import SdLayout from '@/layout/SdLayout'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter,
    SdLayout
  }
}
</script>
<style lang="scss">
  @import './layout/scss/functions';
  @import './layout/scss/mixins';
  body, html{
    background: v(--background);
    color: v(--text);
  }
  .app{
    &__content{
     @include iosSafeArea;
      padding: rem(16);
    }
  }
</style>
