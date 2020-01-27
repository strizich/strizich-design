<template>
  <fieldset class="sd--field__group">
    <legend class="sd--field__legend">
      {{title}}
    </legend>
    <div class="sd--field__block">
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: String,
    stack: Boolean
  },
  computed: {
    classes: function () {
      return {
        'is--stacked': this.stacked
      }
    }
  }
}
</script>

<style lang="scss">
.sd--field{
  &__group{
    padding: 0 0 16px 0;
  }
  &__block{
    display:flex;
    width: 100%;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    &.is{
      &--stacked{
        flex-direction: column;
        align-content: flex-start;
      }
    }
  }
}
</style>
