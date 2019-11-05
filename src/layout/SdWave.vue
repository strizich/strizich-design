<template>
    <transition name="sd-ripple" @after-enter="sdEnd" appear>
      <span v-if="animating"/>
      {{animating}}
    </transition>
</template>

<script>
export default {
  name: 'SdWave',
  data () {
    return {
      animating: false
    }
  },
  props: {
    waveClasses: null,
    waveStyles: null
  },
  mounted () {
    this.animating = true
  },
  methods: {
    sdEnd () {
      console.log('end:Event Ran')
      this.animating = false
      this.$emit('sd-end')
    },
    sdStart () {
      console.log('start:Event Ran')
      this.animating = true
    }
  }
}
</script>

<style lang="scss">
  @import "./scss/animations";
  .sd-ripple-enter-active {
    transition: .8s $sd-transition-stand-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform;
    opacity: 1

  }
   .sd-ripple-leave-to {
    opacity: 0;
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .sd-ripple-enter {
    opacity: 0;
    transform: scale(.26);
  }
</style>
