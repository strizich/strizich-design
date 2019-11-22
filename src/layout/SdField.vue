// WIP

<template>
  <label class="sd--field">
    <span class="sd--field__label">
      <slot></slot>
    </span>
    <input class="sd--field__input" :type="type"/>
  </label>
</template>

<script>
export default {
  name: 'SdField',
  data () {
    return {

    }
  },
  props: {
    type: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
