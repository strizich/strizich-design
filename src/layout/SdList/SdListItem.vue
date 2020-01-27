<template>
  <li :class="['sd--list__item', classes]">
    <template v-if="!loading">
      <div :class="['sd--list__wrapper', spacingClass]" v-if="title || content">
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
    spacing: {
      type: String,
      default: 'normal'
    },
    link: Boolean
  },
  computed: {
    spacingClass: function () {
      return `is--${this.spacing}`
    },
    classes: function () {
      return {
        'is--link': this.link
      }
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
    list-style-type: none;
    &.is--link{
      padding:0;
    }
  }
  &__wrapper{
    padding: 16px 0 17px;
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
     .is{
      &--tight{
        padding-top: 8px;
        padding-bottom: 9px;
      }
      &--normal{
        padding-top: 16px;
        padding-bottom: 17px;
      }
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
