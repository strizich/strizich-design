<template>
  <div class="sd--card">
    <div class="sd--card__header">
      <div class="sd--card__header--left">
        <h4 class="sd--card__title">{{title}}</h4>
      </div>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/engine';

.sd--card{
  background-color: v(--background-variant);
  border: 1px solid v(--highlight);
  @include sd--elevation(2);
  border-radius: 3px;
  &__title{
    margin:0;
  }
  &__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: spacing(inset, md);
    position:relative;
    border-radius: 3px 3px 0 0;
    h3{
      margin:0;
    }
    &:after{
      content: '';
      position: absolute;
      left: spacing(inset);
      right: 0;
      bottom: 0;
      height: 1px;
      background-color: v(--divider);
    }
  }
  &__body{
    padding: spacing(inset);
  }
}
</style>
