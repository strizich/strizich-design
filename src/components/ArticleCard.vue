<template>
  <sd-card :elevation="elevation">
    <sd-card-header v-if="title" :title="title" align="space-between">
      <sd-chicklet size="sm" :content="articleType" uppercase/>
    </sd-card-header>
    <sd-card-body v-if="!imgUrl">
      {{content}}
    </sd-card-body>
    <sd-card-media :ratio="ratio">
      <img :src="`https://media.graphcms.com/${imgUrl}`" :alt="title"/>
    </sd-card-media>
  </sd-card>
</template>

<script>
import SdCard from '@/layout/SdCard/SdCard'
import SdCardHeader from '@/layout/SdCard/SdCardHeader'
import SdCardBody from '@/layout/SdCard/SdCardBody'
import SdCardMedia from '@/layout/SdCard/SdCardMedia'
// import SdCardFooter from '@/layout/SdCard/SdCardFooter'
import SdChicklet from '@/layout/SdChicklet'
export default {
  name: 'ArticleCard',
  data () {
    return {
      elevation: 4
    }
  },
  props: {
    title: String,
    content: String,
    articleType: String,
    imgUrl: String,
    ratio: {
      type: String,
      default: '1:1'
    }
  },
  methods: {
    countUp: function () {
      return this.count++
    }
  },
  components: {
    SdCard,
    SdCardHeader,
    SdCardMedia,
    SdCardBody,
    SdChicklet
  }
}
</script>

<style lang="scss" scoped>
.sd--card{
  transition: all .23s;
  margin-bottom:16px;
  &__title{
    margin-right: 8px;
  }
}
</style>
