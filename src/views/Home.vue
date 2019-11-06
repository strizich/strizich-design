<template>
  <div class="home">
    <h1 class="text__headline">Buttons</h1>
    <div class="buttons">
      <sd-button theme="primary">Something</sd-button>
      <sd-button theme="secondary">Something</sd-button>
      <sd-button theme="success">Something</sd-button>
      <sd-button theme="warning">Something</sd-button>
      <sd-button theme="danger">Something</sd-button>

      <sd-chicklet theme="danger" pill>Chiket</sd-chicklet>
    </div>
    <ul>
      <li v-for="(b, index) in bools" :key="index">
         <sd-check :name="b.name" v-model="boolResults" :value="b.active">{{b.name}}</sd-check>
      </li>
    </ul>

    <sd-radio name="blep" v-for="(b, index) in bools" :key="index" v-model="boolResults" :value="b.active">{{b.name}}</sd-radio>
    {{boolResults}}
    {{bools}}
  </div>
</template>

<script>
import SdButton from '@/layout/SdButton'
import SdChicklet from '@/layout/SdChicklet'
import SdCheck from '@/layout/SdCheckbox/SdCheck'
import SdRadio from '@/layout/SdRadio/SdRadio'
export default {
  name: 'home',
  data () {
    return {
      rippleActive: false,
      sdRipple: true,
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
    SdRadio
  }
}
</script>

<style lang="scss" scoped>
  .buttons{
    width: 100%;
    display:flex;
    justify-content: space-between
  }
</style>
