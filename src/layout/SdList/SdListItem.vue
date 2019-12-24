<template>
  <li class="sd--list__item">
    <template v-if="!loading">
      <span class="sd--list__title" v-if="title">{{title}}</span>
      <span class="sd--list__content" v-if="content">{{content}}</span>
      <slot/>
    </template>

    <template v-else>
      <sd-text-skeleton/>
      <sd-text-skeleton/>
    </template>
  </li>
</template>

<script>
import SdTextSkeleton from '@/layout/SdSkeleton/SdTextSkeleton'
export default {
  name: 'SdList',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    content: {
      type: String,
      default: 'Content'
    },
    loading: {
      type: Boolean
    }
  },
  components: { SdTextSkeleton }
}
</script>

<style lang="scss" scoped>
.sd--list{
  &__item{
    position: relative;
    padding: 16px;
    &:after{
      content:'';
      height: 1px;
      position: absolute;
      display: block;
      top:100%;
      left: 16px;
      right:0;
      bottom:0;
      background-color: var(--background-variant);
      margin-bottom: 10px;
    }
  }
  &__title{
    font-weight: 700;
    display:block;
    margin-bottom:4px;
  }
  &__content{
    display:block;
  }
}
</style>
