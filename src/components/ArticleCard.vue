<template>
  <article class="article-card">
    <sd-card :elevation="elevation">
      <sd-card-header v-if="title" :title="title" align="space-between">
        <sd-chicklet :content="category" theme="success" size="sm" uppercase v-if="category"/>
      </sd-card-header>
      <sd-card-media :ratio="ratio" v-if="imgUrl">
        <img :src="`https://media.graphcms.com/${imgUrl}`" :alt="title"/>
      </sd-card-media>
      <sd-card-body>
        <slot name="body"/>
      </sd-card-body>
       <sd-card-footer align="flex-end">
         <slot name="footer" />
      </sd-card-footer>
    </sd-card>
  </article>
</template>

<script>
import SdCard from '@/layout/SdCard/SdCard'
import SdCardHeader from '@/layout/SdCard/SdCardHeader'
import SdCardBody from '@/layout/SdCard/SdCardBody'
import SdCardFooter from '@/layout/SdCard/SdCardFooter'
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
  components: {
    SdCard,
    SdCardHeader,
    SdCardMedia,
    SdCardBody,
    SdCardFooter,
    SdChicklet
  }
}
</script>

<style lang="scss" scoped>
.article-card{
  display:flex;
  .sd--card{
    width: 100%;
    height:100%;
  }
}
</style>
