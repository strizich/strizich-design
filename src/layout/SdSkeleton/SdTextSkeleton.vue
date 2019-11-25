<template>
    <span class="text__skeleton" :style="{height:computedHeight, width: computedWidth}">
    </span>

</template>

<script>
export default {
  name: 'SdTextSkeleton',
  props: {
    minWidth: {
      type: Number,
      default: 80
    },
    maxWidth: {
      type: Number,
      default: 100
    },
    maxHeight: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: 14
    }
  },
  computed: {
    computedWidth: function () {
      return this.width || `${Math.floor(Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth}%`
    },
    parentName: function () {
      return this.$options.name
    },
    computedHeight: function () {
      return `${this.height}px`
    }
  }
}
</script>

<style lang="scss">
  .text{
    &__skeleton{
      display:inline-block;
      position:relative;
      overflow: hidden;
      background-color: var(--background-variant);
      &:after{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        transform: translateX(-100%);
        animation: shimmer 5s infinite;
        content: '';
        background-image: linear-gradient(
          90deg,
          rgba(#000, 0) 0,
          rgba(#000, 0.75) 20%,
          rgba(#000, 0.5) 60%,
          rgba(#000, 0)
        );
      }
    }
  }
   @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
</style>
