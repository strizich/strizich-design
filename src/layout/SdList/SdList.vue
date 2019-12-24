<template>
  <div class="sd--list">
    <ul class="sd--list__wrapper">
      <slot/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SdList'
}
</script>

<style lang="scss">
.sd--list{
  &__wrapper{
    list-style-type: none;
    padding:0;
    margin:0;
  }
}
</style>
