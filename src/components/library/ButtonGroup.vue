<template>
  <div class="buttons">
    <div class="buttons__header">
      <p class="sd--text__lead">Lead Text</p>
      <h1 class="sd--text__headline">Buttons</h1>
    </div>
    <div class="buttons__content">
      <div class="buttons__results">
        <template v-for="(color, index) in colors">
          <sd-button
            :aria-label="`${color} button`"
            :theme="color"
            :pill="selectedPill === 'Pill'"
            :rounded="selectedPill === 'Rounded'"
            :flat="selectedStyle === 'Flat'"
            :outline="selectedStyle === 'Outline'"
            :size="selectedSize"
            :block="isBlock"
            :key="index">
              {{color}}
          </sd-button>
        </template>
      </div>
      <div class="buttons__options">
        <div class="buttons__group">
          <p>Sizes</p>
          <sd-radio
            name="sizes"
            v-model="selectedSize"
            v-for="(size, index) in sizes"
            :key="`size-${index}`"
            :value="size.value">
            {{size.name}}
          </sd-radio>
        </div>
        <div class="buttons__group">
          <p>Pill / Rounded Types</p>
          <sd-radio
            name="pills"
            v-for="(pill, index) in pills"
            :key="`pill-${index}`"
            :value="pill"
            v-model="selectedPill">
            {{pill}}
          </sd-radio>
        </div>
        <div class="buttons__group">
          <p>Style Types</p>
          <sd-radio
            name="Styles"
            v-for="(style, index) in boxStyle"
            :key="`style-${index}`"
            :value="style"
            v-model="selectedStyle">
            {{style}}
          </sd-radio>
        </div>
        <div class="buttons__group">
          <p>Layout Options</p>
          <sd-check v-model="isBlock">
            Block Level
          </sd-check>
        </div>
      </div>
    </div>
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
      selectedPill: 'Default',
      selectedStyle: 'Default',
      isBlock: false,
      colors: [
        'primary',
        'secondary',
        'default',
        'warning',
        'danger',
        'success'
      ],
      boxStyle: [ 'Default', 'Flat', 'Outline' ],
      pills: [ 'Default', 'Pill', 'Rounded' ],
      sizes: [
        { name: 'Default', value: 'md' },
        { name: 'Small', value: 'sm' },
        { name: 'Large', value: 'lg' }
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
  @import '../../layout/SdElevation/mixins';
  @import '../../layout/scss/breakpoints';
  .buttons{
    background-color: var(--background-accent);
    padding: 64px;
    @include breakpoint-down('md'){
      padding: 32px;
    }
    &__group{
      padding: 8px 0;
    }
    &__content{
      display:flex;
      justify-content: space-between;
       @include breakpoint-down('md'){
         flex-direction: column;
       }
      & > h3{
        display:block;
        width:100%;
      }
    }
    &__options{
      display: flex;
      width: 100%;
      padding: 0 32px;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 16px;
      @include breakpoint-down('md'){
        width: 100%;
        min-width: 100%;
        padding: 0px;
      }
    }
    &__results{
      display:flex;
      align-content: center;
      justify-content: center;
      min-width: 66%;
      padding: 16px;
      background-color: var(--background-accent);
      border: 1px solid var(--background-highlight);
      @include sd--elevation(6, inset);
      flex-wrap: wrap;
      @include breakpoint-down('md'){
        width: 100%;
      }
      .sd--button{
        margin: 8px;
      }
    }
  }
</style>
