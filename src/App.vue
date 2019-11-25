<template>
  <sd-layout id="app" :sidebar="menuState">
    <template v-slot:header>
      <the-header @menu-open="menuToggle($event)"/>
    </template>
    <template v-slot:content>
      <div class="app__content">
        <router-view/>
      </div>
    </template>
    <template v-slot:sidebar>
      <the-sidebar/>
    </template>
    <template v-slot:footer>
      <the-footer align="space-between">
        <template v-slot:start>
          <strong class="text__footnote">Made with love.</strong>
        </template>

        <template v-slot:end>
          <small class="text__footnote">Powered by: <em>VueJS</em> and <em>GraphCMS</em></small>
        </template>
      </the-footer>
    </template>
  </sd-layout>
</template>

<script>
import '@/layout/scss'
import SdLayout from '@/layout/SdLayout'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import TheSidebar from '@/components/TheSidebar'
export default {
  data () {
    return {
      menuState: false
    }
  },
  components: {
    TheHeader,
    TheFooter,
    TheSidebar,
    SdLayout
  },
  methods: {
    menuToggle: function (event) {
      this.menuState = event
      console.log(event)
    }
  }
}
</script>
<style lang="scss">
  @import './layout/scss/functions';
  body, html{
    background: v(--background);
    color: v(--text);
  }
</style>
