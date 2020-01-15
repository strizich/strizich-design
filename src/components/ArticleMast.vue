<template>
  <div class="mast sd--elevation--24">
    <div class="mast__wrapper">
      <div class="mast__image">
        <!-- Create loading image placeholder -->
        <sd-card-media :ratio="ratio">
          <img :src="`https://media.graphcms.com/${imgSrc}`" :alt="title"/>
        </sd-card-media>
      </div>
      <!-- Should this be another component? Add Skele when loading?-->
      <div class="mast__content">
        <div class="mast__header">
          <p class="sd--text__caption">Leading description</p>
          <h1 class="sd--text__headline">{{title}}</h1>
        </div>
        <div class="mast__details">
          <sd-list>
            <sd-list-header title="things"/>
            <sd-list-item content="one"/>
            <sd-list-item content="two"/>
            <sd-list-item content="three"/>
          </sd-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SdCardMedia from '@/layout/SdCard/SdCardMedia'
import SdList from '@/layout/SdList/SdList'
import SdListItem from '@/layout/SdList/SdListItem'
import SdListHeader from '@/layout/SdList/SdListHeader'
import '@/layout/SdElevation'
export default {
  name: 'ArticleMast',
  props: {
    title: String,
    imgSrc: String,
    ratio: {
      type: String,
      default: '1x1'
    }
  },
  components: {
    SdCardMedia,
    SdList,
    SdListItem,
    SdListHeader
  }
}
</script>

<style lang="scss" scoped>
  @import '../layout/scss/breakpoints';

  .mast{
    background-color: var(--background-highlight);
    margin-bottom: 40px;
    &__wrapper{
      display: flex;
      justify-content: space-between;
      height: 100%;
      max-width: 930px;
      margin: 0 auto;
      @include breakpoint-down('md') {
        flex-direction: column;
        justify-content: flex-start;
      }
    }
    &__image{
      flex: 1;
      padding: 16px;
      min-width: 400px;
      @include breakpoint-down('md'){
        width: 100%;
        padding:0;
        min-width: inherit;
        margin-bottom: 16px;
      }
    }
    &__content{
      flex: 2;
      padding: 16px;
    }
  }
</style>
