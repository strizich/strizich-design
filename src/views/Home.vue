<template>
  <div class="home">
    <home-mast/>
    <section class="home__content">
      <section-header>Cards</section-header>
      <div class="cards">
        <article-card
          ratio="16:9"
          title="Bleep"
          category="Case Study"
          imgUrl="Q9Mfd5PSn2bEULCnYRi7"
        />
        <article-card ratio="16:9"
          title="Bleep"
          category="Case Study"
          imgUrl="Q9Mfd5PSn2bEULCnYRi7"
        />
        <article-card ratio="16:9"
          title="Bleep"
          category="Case Study"
          imgUrl="Q9Mfd5PSn2bEULCnYRi7"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard'
import HomeMast from '@/components/HomeMast'
import SectionHeader from '@/components/SectionHeader'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    ArticleCard,
    HomeMast,
    SectionHeader
  },
  metaInfo: {
    title: 'Personal UI framework'
  },
  methods: {
    ...mapMutations([
      'setTitle'
    ])
  },
  mounted () {
    this.setTitle('UI Design Library Built with Vue')
  }
}
</script>

<style lang="scss" scoped>
 .home{
   &__content{
    @include iosSafeArea;
    margin-top: 64px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 32px;
   }
 }

.buttons{
  display: flex;
  justify-content: space-evenly;
}
.cards{
  display:flex;
  max-width: 930px;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  & > .article-card{
     max-width: 50%;
    @include breakpoint-down('md'){
       max-width:100%;
    }
    @include breakpoint-down('sm'){
      max-width:100%;
    }
  }
}
.buttons{
  flex-wrap: wrap;
}
</style>
