<template>
  <li class="sd--list__header">
    <h4 class="sd--text__caption">{{title}}</h4>
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

<style lang="scss" scoped>
.sd--list{
  &__header{
    & > h4 {
      font-size: 18px;
      margin-bottom:0;
      padding:0;

    }
  }
}
</style>
