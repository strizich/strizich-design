<template>
  <div class="home">
    <home-mast/>
    <section class="home__content">
      <h1 class="text__headline">Buttons</h1>
      <div class="buttons">
        <template v-for="(button, index) in colorThemes">
          <sd-button :theme="button.color" :key="index">Something</sd-button>
        </template>
      </div>
      <hr class="divider divider--lg"/>
      <h1 class="text__headline">Chicklets</h1>
      <div class="chicklets">
        <template v-for="(chicklet, index) in colorThemes">
          <sd-chicklet :theme="chicklet.color" :key="index">Something</sd-chicklet>
        </template>
      </div>
      <hr class="divider divider--lg"/>

      <h2 class="text__headline">Radio</h2>
      <sd-radio name="blep" v-for="(b, index) in bools" :key="index" v-model="boolResults" :value="b.active">{{b.name}}</sd-radio>

      <hr class="divider divider--lg"/>

      <div class="section__header">
        <h3>Custom Card</h3>
      </div>
      <div class="cards">
        <article-card ratio="16:9" title="Bleep" content="bloop" category="Case Study" imgUrl="Q9Mfd5PSn2bEULCnYRi7"/>

        <article-card ratio="16:9" title="Bleep" content="bloop" category="Case Study" imgUrl="Q9Mfd5PSn2bEULCnYRi7" />

        <article-card ratio="16:9" title="Bleep" content="bloop" category="Case Study" imgUrl="Q9Mfd5PSn2bEULCnYRi7"/>
      </div>
    </section>
  </div>
</template>

<script>
import SdButton from '@/layout/SdButton'
import SdChicklet from '@/layout/SdChicklet'
import SdRadio from '@/layout/SdRadio/SdRadio'
import ArticleCard from '@/components/ArticleCard'
import HomeMast from '@/components/HomeMast'

export default {
  name: 'home',
  data () {
    return {
      colorThemes: [
        { color: 'primary', direction: 'top' },
        { color: 'secondary', direction: 'bottom' },
        { color: 'warning', direction: 'left' },
        { color: 'danger', direction: 'right' },
        { color: 'success', direction: 'top' }],
      rippleActive: false,
      sdRipple: true,
      active: false,
      checkResults: [],
      boolResults: {},
      bools: [
        {
          active: false,
          value: 'one',
          name: 'hello'
        },
        {
          active: true,
          value: 'two',
          name: 'world'
        }
      ]
    }
  },
  components: {
    SdButton,
    SdChicklet,
    SdRadio,
    ArticleCard,
    HomeMast
  }
}
</script>

<style lang="scss" scoped>
 @import '../layout/scss/mixins';
 .home{
   &__content{
    @include iosSafeArea;
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
    @include breakpoint-down('sm'){
      max-width:100%;
    }

  }
}
.buttons{
  flex-wrap: wrap;
}
</style>
