<template>
  <span class="sd--icon"/>
</template>

<script>
  export default {
    name: 'SdIcon',
    props: {
      name: String
    }
  }
</script>

<style lang="scss" scoped>
@import './scss/spacing';
@import './scss/functions';

$icons: (
  calender,
  calender-day,
  info,
  info-alt,
  not-visible,
  not-visible-alt,
  visible,
  vert-options
);

.sd--icon{
  padding: spacing(inset, xs);
  display:inline-flex;
  align-self: center;
  @each $icon in $icons {
    &:after{
      background-image:url(../assets/icons/vert-options-dark.svg);
      display:flex;
      align-items: center;
      justify-content: center;
      fill: v(--icon);
      width: 16px;
      height: 16px;
      content:'';
    }
  }


}
</style>
