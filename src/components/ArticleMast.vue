<template>
  <div class="mast sd--elevation--4">
    <sd-container full>
      <sd-row align-items="center">
        <sd-col :sm="4" :md="6" :xl="3">
          <sd-card-media :ratio="ratio">
            <img :src="`https://media.graphcms.com/${imgSrc}`" :alt="title"/>
          </sd-card-media>
        </sd-col>
        <sd-col :sm="8" :md="6" :xl="9" :order="-1">
          <div class="mast__details">
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
        </sd-col>
      </sd-row>
    </sd-container>
  </div>
</template>

<script>
import SdContainer from '@/layout/SdGrid/SdContainer'
import SdCol from '@/layout/SdGrid/SdCol'
import SdRow from '@/layout/SdGrid/SdRow'
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
    SdListHeader,
    SdContainer,
    SdRow,
    SdCol
  }
}
</script>

<style lang="scss" scoped>
  .mast{
    background-color: var(--background-highlight);
    margin-bottom: 40px;
    padding: 32px 0;
    &__image{
      flex: 1;
      padding: 16px;
      min-width: 400px;
    }
    &__details{
      margin-top: 32px;
    }
  }
</style>
