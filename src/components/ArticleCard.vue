<template>
  <sd-card :elevation="elevation"
    @mouseover.native="$event => onMouseOver($event)"
    @mouseleave.native="$event => onMouseLeave($event)"
    >
    <sd-card-header v-if="title" :title="title"/>
    <sd-card-body>
      {{content}}
    </sd-card-body>
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
    articleType: String
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
