<template>
  <article class="article-card">
    <sd-card :elevation="elevation">
      <sd-card-header v-if="title" :title="title" align="space-between">
        <sd-chicklet size="sm" :content="category" uppercase/>
      </sd-card-header>
      <sd-card-body v-if="!imgUrl">
        {{content}}
      </sd-card-body>
      <sd-card-media :ratio="ratio">
        <img :src="`https://media.graphcms.com/${imgUrl}`" :alt="title"/>
      </sd-card-media>
    </sd-card>
  </article>
</template>

<script>
import SdCard from '@/layout/SdCard/SdCard'
import SdCardHeader from '@/layout/SdCard/SdCardHeader'
import SdCardBody from '@/layout/SdCard/SdCardBody'
import SdCardMedia from '@/layout/SdCard/SdCardMedia'
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
    category: String,
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
.article-card{
  padding: 8px;
  width:100%;
}
</style>
