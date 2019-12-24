<template>
  <div class="mast sd--elevation--24">
    <div class="mast__content">
      <div class="mast__image">
        <!-- Create loading image placeholder -->
        <sd-card-media :ratio="ratio">
          <img :src="`https://media.graphcms.com/${imgSrc}`" :alt="title"/>
        </sd-card-media>
      </div>

      <!-- Should this be another component? Add Skele when loading?-->
      <div class="mast__description">
        <p class="sd--text__lead">Leading description</p>
        <h1 class="sd--text__headline">{{title}}</h1>
        <p>Full Description</p>
      </div>
    </div>
  </div>
</template>

<script>
import SdCardMedia from '@/layout/SdCard/SdCardMedia'
import '@/layout/SdElevation'
export default {
  name: 'ArticleMast',
  components: { SdCardMedia },
  props: {
    title: String,
    imgSrc: String,
    ratio: {
      type: String,
      default: '1x1'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../layout/scss/css-vars';

  .mast{
    background-color: var(--background-variant);
    margin-bottom: 40px;
    &__content{
      padding: 16px;
      display: flex;
      justify-content: space-between;
      height: 100%;
    }
    &__image{
      flex: 1;
      padding: 8px;
    }
    &__description{
      flex: 2;
      padding: 8px;
    }
  }
</style>
