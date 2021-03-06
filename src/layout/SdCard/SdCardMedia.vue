<template>
  <div :class="['sd--card__media', mediaClasses, mediaSize]">
    <slot/>
  </div>
</template>

<script>
import SdPropValidator from '@/utilities/SdPropValidator.js'
export default {
  name: 'SdCardMedia',
  props: {
    ratio: {
      type: String,
      ...SdPropValidator('ratio', [
        '16-9',
        '16/9',
        '16:9',
        '16x9',
        '4-3',
        '4/3',
        '4:3',
        '4x3',
        '1-1',
        '1/1',
        '1:1',
        '1x1'
      ])
    },
    size: {
      type: String,
      default: 'md',
      ...SdPropValidator('size', [
        'sm',
        'md',
        'lg'
      ])
    }
  },
  computed: {
    mediaClasses: function () {
      let classes = {}
      if (this.ratio) {
        const ratio = this.getAspectRatio()
        if (ratio) {
          const [horz, vert] = ratio
          classes[`sd--card__media--${horz}-${vert}`] = true
        }
      }
      return classes
    },
    mediaSize: function () {
      return `sd--card__media--${this.size}`
    }
  },
  methods: {
    getAspectRatio: function () {
      let ratio = []
      if (this.getRatioFormat(':')) {
        ratio = this.ratio.split(':')
      } else if (this.getRatioFormat('/')) {
        ratio = this.ratio.split('/')
      } else if (this.getRatioFormat('-')) {
        ratio = this.ratio.split('-')
      } else if (this.getRatioFormat('x')) {
        ratio = this.ratio.split('x')
      }
      return ratio.length === 2 ? ratio : null
    },
    getRatioFormat: function (divider) {
      return this.ratio.indexOf(divider) !== -1
    }
  }
}
</script>

<style lang="scss">
$ratioSizes: (
  (16, 9),
  (4, 3),
  (1, 1)
);

.sd--card {
  &__media {
    position:relative;
    @each $size in $ratioSizes {
      $horz: nth($size, 1);
      $vert: nth($size, 2);
      &--#{$horz}-#{$vert} {
        @include aspect-ratio($horz, $vert);
      }
    }
    + .sd--card__header{
      padding-top: 24px
    }
    + .sd--card__content:last-child{
      padding-bottom :16px;
    }
    img {
      width: 100%;
    }
    &:first-child{
      border-radius: 3px 3px 0 0;
    }
    &:last-child{
      border-radius: 0 0 3px 3px;
    }
    &:only-child{
      border-radius: 3px;
    }
  }
}
</style>
