<template>
  <sd-layout id="app">
    <template v-slot:content>
      <div class="app__content">
        <router-view/>
      </div>
    </template>
    <template v-slot:sidebar>
      <the-sidebar/>
    </template>
    <template v-slot:footer>
      <the-footer>
        <template v-slot:start>
          <strong class="text__footnote">Made with love.</strong>
        </template>
        <template v-slot:end>
          <small class="text__footnote">Powered by: <em>VueJS</em></small>
        </template>
      </the-footer>
    </template>
  </sd-layout>
</template>

<script>
import '@/layout/global.scss'
import SdLayout from '@/layout/SdLayout'
import TheFooter from '@/components/TheFooter'
import TheSidebar from '@/components/TheSidebar'

const TIMEOUT = 1

export default {
  // TODO: Rewrite when Vue3 drops.
  name: 'App',
  mounted () {
    setTimeout(() => this.scrollTo(this.$route.hash), 1)
  },

  methods: {
    scrollTo: function (hashtag) {
      if (hashtag) {
        setTimeout(() => { location.href = hashtag }, TIMEOUT)
      }
    }
  },
  components: {
    TheFooter,
    TheSidebar,
    SdLayout
  },

  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s | Strizich Design'
  }
}
</script>
<style lang="scss">
  body, html{
    background: v(--background);
    color: v(--text);
  }
</style>
