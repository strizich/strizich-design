<template>
  <sd-card :elevation="elevation">
    <sd-card-header v-if="title" :title="title"/>
    <sd-card-body v-if="!mediaUrl">
      {{content}}
    </sd-card-body>
    <sd-card-media ratio="4:3">
      <img :src="`https://media.graphcms.com/${mediaUrl}`" :alt="title"/>
    </sd-card-media>
    <sd-card-footer
      align="space-between"
      >
      <sd-button
        @click="countUp"
        :flat="buttonFlat">
          {{count}}
      </sd-button>
      <sd-chicklet size="lg" theme="warning" :content="articleType" uppercase/>
    </sd-card-footer>
  </sd-card>
</template>

<script>
import SdCard from '@/layout/SdCard/SdCard'
import SdCardHeader from '@/layout/SdCard/SdCardHeader'
import SdCardBody from '@/layout/SdCard/SdCardBody'
import SdCardMedia from '@/layout/SdCard/SdCardMedia'
import SdCardFooter from '@/layout/SdCard/SdCardFooter'
import SdButton from '@/layout/SdButton'
import SdChicklet from '@/layout/SdChicklet'
export default {
  name: 'ArticleCard',
  data () {
    return {
      elevation: 4,
      count: 0,
      isHover: false,
      buttonFlat: true
    }
  },
  props: {
    title: String,
    content: String,
    articleType: String,
    mediaUrl: String
  },
  methods: {
    countUp: function () {
      return this.count++
    },
    onMouseOver: function (event) {
      this.buttonFlat = false
      this.elevation = 24
    },
    onMouseLeave: function (event) {
      this.buttonFlat = true
      this.elevation = 4
    }
  },
  components: {
    SdCard,
    SdCardHeader,
    SdCardMedia,
    SdCardBody,
    SdCardFooter,
    SdButton,
    SdChicklet
  }
}
</script>

<style lang="scss" scoped>
.sd--card{
  transition: all .23s;
  margin-bottom:16px;
}
</style>
