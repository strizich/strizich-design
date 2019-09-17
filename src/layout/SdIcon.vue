<template>
  <i :class="['sd--icon', iconSize]">{{name}}</i>
</template>

<script>

export default {
  name: 'SdIcon',
  props: {
    name: {
      type: String,
      default: 'face'
    },
    size: {
      type: String,
      default: 'md'
    },
    customColor: {
      type: String,
      required: false
    }
  },
  computed: {
    iconSize: function () {
      return `is--${this.size}`
    }
  }
}
</script>

<style lang="scss">
$icon-sizes: (
  xs: 11px,
  sm: 16px,
  md: 24px,
  lg: 32px,
  xxl: 64px
);

$icon-size: 24px;
 /* fallback */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
}

.sd--icon {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: $icon-size;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  &.is{
    @each $size, $value in $icon-sizes{
      &--#{$size}{
        font-size: $value;
        width: $value;
        height: $value;
        min-width: $value;
        line-height: 1;
      }
    }
  }
}


</style>
