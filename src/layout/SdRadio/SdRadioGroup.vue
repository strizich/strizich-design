<template>
  <fieldset class="sd--radio__group">
    <legend class="sd--field__legend">{{title}}</legend>
    <div :class="['sd--radio__block', classes]">
      <slot/>
    </div>
  </fieldset>
</template>

<script>

export default {
  props: {
    title: String,
    stack: Boolean,
    inline: Boolean
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

<style lang="scss" scoped>
//TODO: Move this to its own file.

.sd--field__legend{
  font-size: 14px;
  letter-spacing: 1px;
  color: var(--text-accent);
}

.sd--radio{
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
