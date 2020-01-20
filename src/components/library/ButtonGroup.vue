<template>
  <div>
    <section class="button__group">
      <h1>Buttons</h1>
      <h3>Default Buttons</h3>
      <label>Button Sizes</label>
      <sd-radio
        name="sizes"
        v-for="(size, index) in sizes"
        :key="index"
        v-model="selectedSize"
        :value="size.value">
        {{size.name}}
      </sd-radio>
       <sd-check v-model="isFlat">
         Flat
       </sd-check>
      <sd-check v-model="isPill">
         Pill
       </sd-check>
      <sd-check v-model="isOutline">
         Outline
       </sd-check>

      <div>
        <template v-for="(color, index) in colors">
          <sd-button :flat="isFlat" :pill="isPill" :outline="isOutline" :size="selectedSize" :theme="color" :key="index">
            blah
          </sd-button>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import SdButton from '@/layout/SdButton'
import SdRadio from '@/layout/SdRadio/SdRadio'
import SdCheck from '@/layout/SdCheckbox/SdCheck'
export default {
  name: 'ButtonGroup',
  data () {
    return {
      selectedSize: 'md',
      isFlat: false,
      isPill: false,
      isOutline: false,
      colors: [
        'primary', 'default', 'secondary', 'warning', 'danger', 'success'
      ],
      sizes: [
        {
          name: 'Small',
          value: 'sm'
        },
        {
          name: 'Default',
          value: 'md'
        },
        {
          name: 'Large',
          value: 'lg'
        }
      ]
    }
  },
  components: {
    SdButton,
    SdRadio,
    SdCheck
  }
}
</script>

<style lang="scss" scoped>
  .button__group{
    margin-bottom: 32px;
  }
  .sd--button{
    margin-right: 8px;
  }
</style>
