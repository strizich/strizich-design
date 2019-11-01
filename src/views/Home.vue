<template>
  <div class="home">
    <h1 class="text__headline">Buttons</h1>
    <sd-button theme="primary">Something</sd-button>
    <sd-button theme="secondary">Something</sd-button>
    <sd-button theme="success">Something</sd-button>
    <sd-button theme="warning">Something</sd-button>
    <sd-button theme="danger">Something</sd-button>

  </div>
</template>

<script>
// @ is an alias to /src
// import HomeMast from '@/components/HomeMast'
// import HelloWorld from '@/components/HelloWorld.vue'
import SdButton from '@/layout/SdButton'

export default {
  name: 'home',
  components: {
    SdButton
  }
}
</script>

<style lang="scss" scoped>

</style>
