<template>
  <li class="sd--list__item">
    <template v-if="!loading">
      <div :class="['sd--list__block', classes]" v-if="title || content">
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
    },
    link: Boolean,
    tight: Boolean
  },
  computed: {
    classes: function () {
      return {
        'is--link': this.link,
        'is--tight': this.tight
      }
    }
  },
  components: { SdTextSkeleton }
}
</script>

<style lang="scss">
.sd--list{
  &__item{
    position: relative;
    padding:0;
  }
  &__block{
    padding: 8px 0 9px;
    &.is{
      &--link{
        padding:0;
      }
      &--tight{
        padding-top: 8px;
        padding-bottom: 9px;
      }
    }
    &:after{
      content:'';
      height: 1px;
      position: absolute;
      display: block;
      left: 16px;
      right:0;
      bottom: 1px;
      background-color: var(--divider);
    }
  }
  &__title{
    font-weight: 700;
    display:block;
    margin-bottom:4px;
  }
  &__content{
    display:block;
    padding-left: 16px;
  }
}
</style>
