<template>
  <div :class="['sd--row', classes]" :style="{alignItems, justifyContent}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdRow',
  props: {
    gutterless: Boolean,
    alignItems: String,
    justifyContent: String
  },
  computed: {
    classes: function () {
      return {
        'is--gutterless': this.gutterless
      }
    }
  }
}
</script>

<style lang="scss">
  .sd--row {
    @include make-row();
  }

  .is--gutterless{
    margin-right: 0;
    margin-left: 0;

    > .sd--col,
    > [class*="col-"] {
      padding-right: 0;
      padding-left: 0;
    }
  }
</style>
