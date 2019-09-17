<template>
  <div class="sd--card__content">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdCardContent'
}
</script>

<style lang="scss" scoped>
@import '../scss/spacing';
@import '../scss/functions';

.sd--card {
  &__content{
    padding: spacing(inset);
  }
}

</style>
