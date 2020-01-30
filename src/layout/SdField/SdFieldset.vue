<template>
  <fieldset class="sd--field__group">
    <legend class="sd--field__legend">
      {{title}}
    </legend>
    <div :class="['sd--field__block', classes]">
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
        'is--stacked': this.stack
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
        width:100%;
        align-content: flex-start;
        .sd--checkbox{
          margin-left:0;
          margin-right: 0;
        }
        .sd--radio{
          margin-left:0;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
