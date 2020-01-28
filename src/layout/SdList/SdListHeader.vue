<template>
  <li class="sd--list__header">
    <h5 class="sd--text__caption">{{title}}</h5>
    <template v-if="!title">
      <slot/>
    </template>
  </li>
</template>

<script>
export default {
  name: 'SdListHeader',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.sd--list{
  &__header{
    padding: 0 16px 8px;
    & > h5 {
      font-size: 14px;
      line-height: 14px;
      margin-bottom:0;
      padding: 16px 0 0;
    }
  }
}
</style>
