<template>
  <div class="page">
  <div class="page__mast">
    <p class="sd--text__caption">About cards</p>
    <h1 class="sd--text__headline">Cards</h1>
  </div>
  <div class="app__page">
    <sd-row>
      <sd-col :md="6">
        <sd-card>
          <sd-card-header>
            header
          </sd-card-header>
          <sd-card-media ratio="16x9">
            <img :src="`https://media.graphcms.com/Q9Mfd5PSn2bEULCnYRi7`" alt="title"/>
          </sd-card-media>
          <sd-card-body>
            body
          </sd-card-body>
          <sd-card-footer>
            footer
          </sd-card-footer>
        </sd-card>
      </sd-col>
      <sd-col :md="6">
        <sd-card>
          <sd-card-header>
            header
          </sd-card-header>
          <sd-card-media ratio="16x9">
            <img :src="`https://media.graphcms.com/Q9Mfd5PSn2bEULCnYRi7`" alt="title"/>
          </sd-card-media>
          <sd-card-footer>
            <sd-button>Button</sd-button>
          </sd-card-footer>
        </sd-card>
      </sd-col>
    </sd-row>
  </div>
  </div>
</template>

<script>
import SdCol from '@/layout/SdGrid/SdCol'
import SdRow from '@/layout/SdGrid/SdRow'
// import SdContainer from '@/layout/SdGrid/SdContainer'
import SdCard from '@/layout/SdCard/SdCard'
import SdCardHeader from '@/layout/SdCard/SdCardHeader'
import SdCardBody from '@/layout/SdCard/SdCardBody'
import SdCardMedia from '@/layout/SdCard/SdCardMedia'
import SdCardFooter from '@/layout/SdCard/SdCardFooter'
import SdButton from '@/layout/SdButton'
export default {
  components: { SdButton, SdCol, SdRow, SdCard, SdCardHeader, SdCardBody, SdCardMedia, SdCardFooter }
}
</script>

<style lang="scss" scoped>
.page{
  &__mast{
    background-color: var(--background-accent);
    padding: 32px;
  }
}
</style>
