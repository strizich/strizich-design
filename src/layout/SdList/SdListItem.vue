<template>
  <li class="sd--list__item">
    <template v-if="!loading">
      <div class="sd--list__wrapper" v-if="title || content">
        <span class="sd--list__title" v-if="title">{{title}}</span>
        <span class="sd--list__content" v-if="content">{{content}}</span>
      </div>
      <slot/>
    </template>

    <template v-else>
      <div class="sd--list__wrapper">
        <sd-text-skeleton v-if="title"/>
        <sd-text-skeleton v-if="content"/>
      </div>
    </template>
  </li>
</template>

<script>
import SdTextSkeleton from '@/layout/SdSkeleton/SdTextSkeleton'
export default {
  name: 'SdList',
  props: {
    title: {
      type: String
    },
    content: {
      type: String
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
    padding: 0 16px;
    &:after{
      content:'';
      height: 1px;
      position: absolute;
      display: block;
      left: 16px;
      right:0;
      bottom: 1px;
      background-color: var(--background-accent);
    }
  }
  &__wrapper{
    padding: 16px 0 17px ;
  }
  &__title{
    font-weight: 700;
    display:block;
    margin-bottom:4px;
  }
  &__content{
    display:block;
  }
  .sd--link{
    color: var(--text);
    display:block;
    padding: 16px 0 16px 16px;
    margin-right: -16px;
    margin-left: -16px;
    transition: background-color .23s ease-in-out;
    &:hover{
      background-color: var(--background-accent);
    }
  }
}
</style>
