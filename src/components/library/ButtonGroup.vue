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
            :href="selectedTag === 'Link' ? '/link' : ''"
            :to="selectedTag === 'Route' ? '/route' : ''"
            :pill="selectedPill === 'Pill'"
            :rounded="selectedPill === 'Rounded'"
            :flat="selectedStyle === 'Flat'"
            :outline="selectedStyle === 'Outline'"
            :size="selectedSize"
            :block="isBlock"
            :icon-only="isIconOnly"
            align="center"
            :key="index">
              <sd-icon :size="selectedSize" name="link" v-if="showIcon"/>
              <span v-if="!isIconOnly">{{color}}</span>
          </sd-button>
        </template>
      </div>
      <div class="buttons__options">
        <sd-fieldset title="Button Size">
          <sd-radio
            name="sizes"
            v-model="selectedSize"
            v-for="(size, index) in sizes"
            :key="`size-${index}`"
            :value="size.value">
            {{size.name}}
          </sd-radio>
        </sd-fieldset>
        <sd-fieldset title="Types">
          <sd-radio
            name="pills"
            v-for="(pill, index) in pills"
            :key="`pill-${index}`"
            :value="pill"
            v-model="selectedPill">
            {{pill}}
          </sd-radio>
        </sd-fieldset>
        <sd-fieldset title="Style">
          <sd-radio
            name="Styles"
            v-for="(style, index) in boxStyle"
            :key="`style-${index}`"
            :value="style"
            v-model="selectedStyle">
            {{style}}
          </sd-radio>
        </sd-fieldset>
        <sd-fieldset title="Tag">
          <sd-radio
            name="Tags"
            v-for="(tag, index) in tagType"
            :key="`tag-${index}`"
            :value="tag"
            v-model="selectedTag">
            {{tag}}
          </sd-radio>
        </sd-fieldset>
        <sd-fieldset title="Layout Options" stack>
          <sd-checkbox v-model="isBlock">
            Block Level
          </sd-checkbox>
          <sd-checkbox v-model="showIcon">
            Show Icon
          </sd-checkbox>
          <sd-checkbox v-model="isIconOnly" :disabled="!showIcon">
            Icon Only
          </sd-checkbox>
        </sd-fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import SdButton from '@/layout/SdButton'
import SdRadio from '@/layout/SdRadio/SdRadio'
import SdCheckbox from '@/layout/SdCheckbox'
import SdFieldset from '@/layout/SdField/SdFieldset'
import SdIcon from '@/layout/SdIcon'
export default {
  name: 'ButtonGroup',
  data () {
    return {
      selectedSize: 'md',
      selectedPill: 'Default',
      selectedStyle: 'Default',
      selectedTag: 'button',
      isBlock: false,
      isIconOnly: false,
      showIcon: false,
      colors: [
        'primary',
        'secondary',
        'default',
        'warning',
        'danger',
        'success'
      ],
      tagType: ['Default', 'Route', 'Link'],
      boxStyle: [ 'Default', 'Flat', 'Outline' ],
      pills: [ 'Default', 'Pill', 'Rounded' ],
      sizes: [
        { name: 'Default', value: 'md' },
        { name: 'Small', value: 'sm' },
        { name: 'Large', value: 'lg' }
      ]
    }
  },
  watch: {
    showIcon (value) {
      if (!value) {
        this.isIconOnly = false
      }
    }
  },
  components: {
    SdButton,
    SdRadio,
    SdCheckbox,
    SdFieldset,
    SdIcon
  }
}
</script>

<style lang="scss" scoped>
  .buttons{
    background-color: var(--background-accent);
    padding: 64px;
    @include breakpoint-down('md'){
      padding: 32px;
    }
     @include breakpoint-down('sm'){
      padding: 32px 16px;
    }
    &__header{
      width: 100%;
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
      margin-bottom: 16px;
      @include breakpoint-down('md'){
        width: 100%;
        min-width: 100%;
        padding: 0px;
      }
    }
    &__results{
      display:flex;
      height: 400px;
      align-items: center;
      align-content: center;
      justify-content: center;
      min-width: 66%;
      background-color: var(--background-accent);
      border: 1px solid var(--background-highlight);
      @include sd--elevation(6, inset);
      flex-wrap: wrap;
      @include breakpoint-down('md'){
        width: 100%;
        margin-bottom: 32px;
      }
      @include breakpoint-down('sm'){
        margin: 0 0 32px;
      }
      .sd--button{
        margin: 8px;
      }
    }
  }
</style>
