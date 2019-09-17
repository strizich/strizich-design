<template>
  <div class="hello">
    <p class="text__caption">Yay Buttons!</p>
    <h1 class="text__headline">Buttons</h1>
    <h1>Header1</h1>
    <h2>Header2</h2>
    <h3>Header3</h3>
    <h4>Header4</h4>
    <h5>Header5</h5>
    <p>Paragraph</p>

    <div class="hello__content">
      <select v-model="selectedSize">
        <option v-for="(size, index) in sizes" :key="index" :value="size">
          {{size}}
        </option>
      </select>
      <select v-model="selectedTheme">
        <option v-for="(theme, index) in themes" :key="index" :value="theme">
          {{theme}}
        </option>
      </select>
      <sd-check v-model="isRounded">Rounded</sd-check>
      <sd-check v-model="isOutline">Outline</sd-check>
      <sd-check v-model="isFlat">Flatten</sd-check>

      <div class="button__group">
        <sd-button
          v-for="(theme, index) in themes"
          :key="index"
          :theme="theme"
          :size="selectedSize"
          :rounded="isRounded"
          :flat="isFlat"
          :outline="isOutline"
          icon="history"
          iconRight="chevron_right"
          @click="onClick">
          {{theme}} button
        </sd-button>

        <hr class="divider divider--lg"/>

        <h3>Chicklets</h3>
        <div class="chicklet__group">
          <sd-chicklet
          :theme="theme"
          :size="selectedSize"
          v-for="(theme, index) in themes" :key="index">{{theme}}</sd-chicklet>
        </div>
      </div>
      <hr class="divider"/>
      <sd-card title="Card">
        <sd-card-content>
          boday
        </sd-card-content>
        <sd-card-footer>
          <template v-slot:left>
            bloop
          </template>
          <template v-slot:right>
            <sd-button>1</sd-button>
            <sd-button>1</sd-button>
            <sd-button>1</sd-button>
            <sd-button iconLeft="history"  iconRight="chevron_right">View</sd-button>
          </template>
        </sd-card-footer>
      </sd-card>

      <hr class="divider"/>

      <ul class="sd--list">
        <li class="sd--list__item">
          List item
        </li>
        <li class="sd--list__item">
          List item
        </li>
        <li class="sd--list__item">
          List item
        </li>
        <li class="sd--list__item">
          <ol class="sd--list">
            <li class="sd--list__item">Ordered List Item</li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SdIcon from '@/layout/SdIcon'
import SdCard from '@/layout/SdCard/SdCard'
import SdCardContent from '@/layout/SdCard/SdCardContent'
import SdCardFooter from '@/layout/SdCard/SdCardFooter'
import SdCheck from '@/layout/SdCheckbox/SdCheck'
import SdButton from '@/layout/SdButton'
import SdChicklet from '@/layout/SdChicklet'

export default {
  name: 'HelloWorld',
  data () {
    return {
      sizes: ['sm', 'md', 'lg'],
      selectedSize: 'md',
      themes: ['primary', 'secondary', 'danger', 'success', 'warning', 'default', 'new'],
      selectedTheme: 'primary',
      isRounded: false,
      isFlat: false,
      isOutline: false
    }
  },
  props: {
    msg: String
  },
  components: {
    SdButton, SdChicklet, SdCheck, SdCard, SdCardContent, SdCardFooter, SdIcon
  },
  methods: {
    onClick: function () {
      console.log('Emitter worked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .button__group {
    margin-bottom: 16px;
    .sd--button{
      margin-right: 8px;
    }
  }
</style>
