<template>
  <div :class="['sd--row', classes]" :style="{alignItems, justifyContent}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SdRow',
  props: {
    dense: Boolean,
    gutterless: Boolean,
    alignItems: String,
    justifyContent: String
  },
  computed: {
    classes: function () {
      return {
        'is--gutterless': this.gutterless,
        'is--dense': this.dense
      }
    }
  }
}
</script>

<style lang="scss">
  .sd--row {
    @include make-row();
    margin: 0 -16px;
  }
  .is--gutterless {
    margin-right: 0;
    margin-left: 0;
    > .sd--col,
    > [class*="col-"] {
      padding-right: 0;
      padding-left: 0;
    }
  }
  .is--dense {
    margin-right: 0;
    margin-left: 0;
    > .sd--col,
    > [class*="col-"] {
      padding-right: 8px;
      padding-left:8px;
    }
  }
</style>
