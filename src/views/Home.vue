<template>
  <div class="home">
    <h1 class="text__headline">Buttons</h1>
    <div class="buttons">
      <template v-for="(button, index) in colorThemes">
        <sd-button :theme="button" :key="index">Something</sd-button>
      </template>
    </div>
    <hr class="divider divider--lg"/>
     <h1 class="text__headline">Chicklets</h1>
    <div class="chicklets">
      <template v-for="(chicklet, index) in colorThemes">
        <sd-chicklet :theme="chicklet" :key="index">Something</sd-chicklet>
      </template>
    </div>
    <hr class="divider divider--lg"/>
    <h1 class="text__headline">Checkbox</h1>
    <ul>
      <li v-for="(b, index) in bools" :key="index">
        <sd-check
          v-model="checkResults[index]"
          :value="true">
            {{b.name}}
        </sd-check>
      </li>
    </ul>
    <hr class="divider divider--lg"/>
    <h2 class="text__headline">Radio</h2>
    <sd-radio name="blep" v-for="(b, index) in bools" :key="index" v-model="boolResults" :value="b.active">{{b.name}}</sd-radio>

    <div class="card__group">
      <sd-card :elevation="24" spacing="inset">
        <sd-card-header title="hello"/>
        <sd-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis.</p>
        </sd-card-body>
        <sd-card-footer>
          Yay
        </sd-card-footer>
      </sd-card>
    </div>
    <hr class="divider divider--lg"/>
    <div class="card__group">
      <article-card ratio="1:1" title="Bleep" content="bloop" article-type="Case Study" imgUrl="Q9Mfd5PSn2bEULCnYRi7"/>
      <article-card ratio="4:3" title="Bleep" content="bloop" article-type="Case Study" imgUrl="Q9Mfd5PSn2bEULCnYRi7" />
      <article-card ratio="16x9" title="Bleep" content="bloop" article-type="Case Study" imgUrl="Q9Mfd5PSn2bEULCnYRi7"/>
    </div>
  </div>
</template>

<script>
import SdButton from '@/layout/SdButton'
import SdChicklet from '@/layout/SdChicklet'
import SdCheck from '@/layout/SdCheckbox/SdCheck'
import SdRadio from '@/layout/SdRadio/SdRadio'
import ArticleCard from '@/components/ArticleCard'
import SdCard from '@/layout/SdCard/SdCard'
import SdCardHeader from '@/layout/SdCard/SdCardHeader'
import SdCardBody from '@/layout/SdCard/SdCardBody'
import SdCardFooter from '@/layout/SdCard/SdCardFooter'

export default {
  name: 'home',
  data () {
    return {
      colorThemes: ['primary', 'secondary', 'warning', 'danger', 'success'],
      rippleActive: false,
      sdRipple: true,
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
    SdCheck,
    SdChicklet,
    SdRadio,
    SdCard,
    SdCardHeader,
    SdCardBody,
    SdCardFooter,
    ArticleCard
  }
}
</script>

<style lang="scss" scoped>
.card__group{
  display:flex;
  margin: 0 auto;
  width: 800px;
  align-items: flex-start;
  .sd--card{
    margin: 16px 8px;
    width:50%;
  }
}
</style>
