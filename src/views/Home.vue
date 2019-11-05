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
        <sd-checkbox v-model="b.active">Boolean</sd-checkbox>
         <sd-check v-model="b.active">Boolean</sd-check>
      </li>
    </ul>

    <sd-button v-for="(btn, index) in test" :key="index" v-bind="btn" rounded>Something</sd-button>

  </div>
</template>

<script>
import SdButton from '@/layout/SdButton'
import SdChicklet from '@/layout/SdChicklet'
import SdCheckbox from '@/layout/SdCheckbox/SdCheckbox'
import SdCheck from '@/layout/SdCheckbox/SdCheck'
export default {
  name: 'home',
  data () {
    return {
      rippleActive: false,
      sdRipple: true,
      bools: [
        { active: false },
        { active: true }
      ],
      test: [
        {
          theme: 'primary',
          size: 'sm'
        }, {
          theme: 'secondary',
          size: 'md'
        }
      ]
    }
  },
  components: {
    SdButton,
    SdCheckbox,
    SdCheck,
    SdChicklet
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
