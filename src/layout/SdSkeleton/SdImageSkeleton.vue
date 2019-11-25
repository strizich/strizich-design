<template>
  <div class="image__skeleton"
  :style="{width:computedSize, height:computedSize, borderRadius: computedRounded}"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: 45
    },
    rounded: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    }
  },
  computed: {
    computedSize: function () {
      return `${this.size}px`
    },
    computedRounded: function () {
      return this.rounded ? '30px' : '0px'
    }
  }
}
</script>

<style lang="scss">
  .image {
    &__skeleton {
      display:inline-block;
      position:relative;
      overflow: hidden;
      background-color: #e3e3e3;
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
          rgba(#fff, 0) 0,
          rgba(#fff, 0.15) 20%,
          rgba(#fff, 0.25) 60%,
          rgba(#fff, 0)
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
