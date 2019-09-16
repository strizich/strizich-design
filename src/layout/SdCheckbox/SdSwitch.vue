<template>
  <div class="sd--switch">
    <label :for="id"
      class="sd--switch__label"
      v-if="$slots.default">
      <slot/>
    </label>
    <div class="sd--switch__container" :class="checkClasses" @click.stop="toggleCheck">
      <div class="sd--switch__knob" :class="isSelected ? 'sd--switch__knob--on' : 'sd--switch__knob--off'">
        <!-- <span>{{isSelected ? 'on' : 'off'}}</span> -->
      </div>
      <input
        class="sd--switch__field"
        type="checkbox"
        v-bind="attributes"
        :id="id"
        :indeterminate="indeterminate"
        :checked="isSelected"/>
    </div>
  </div>
</template>

<script>
import Uuid from '@/utilities/Uuid'
import SdCheckboxMixin from '@/components/SdCheckbox/SdCheckboxMixin'

export default {
  name: 'SdSwitch',
  mixins: [ SdCheckboxMixin ],
  props: {
    id: {
      type: String,
      default: () => 'sd-switch--' + Uuid()
    }
  }
}

</script>

<style lang="scss" scoped>
  .sd--switch{
    display:flex;
    justify-content: space-between;
    margin: 16px 0;
    align-items: center;
    &__knob{
      position:relative;
      top: 50%;
      margin-top: -12px;
      z-index: 100;
      border-radius: 30px;
      width: 20px;
      height: 20px;
      border: 2px solid #747A7C;
      color:#fff;
      text-align: center;
      box-shadow: 0 3px 2px -2px rgba(0,0,0,.3),
                  0px 2px 4px 2px rgba(0,0,0,.05);
      transition:all .23s;
      cursor:pointer;
      span{
        font-size: 11px;
      }
      &:after{
        // Knob Shadow
        content:'';
        display:block;
        position: absolute;
        background-color: rgba(255,255,255,.1);
        width: 6px;
        height: 6px;
        top: 3px;
        right: 3px;
        border-radius: 30px;
      }
      &--on{
        background: #00AA55;
        position:absolute;
        margin-left: -24px;
        left:100%;
        right: 0;
        border-color: #99DDBB;
      }
      &--off{
        background: #656C6E;
        position:absolute;
        margin-left: -2px;
        left: 0;
        right: 100%;
      }
    }
    &__container{
      // Rail
      background: #F6F6F7;
      position: relative;
      width: 46px;
      height: 13px;
      box-shadow: inset 0 1px 4px 0 rgba(0,0,0,0.25);
      transition: background-color .23s ease-in-out;
      border-radius: 30px;
      &:after{
        transition: right .23s ease-in-out, box-shadow .23s ease-in-out;
        content:'';
        display:block;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right: calc(100% - 11px);
        background-color:#008855;
        z-index: 0;
        border-radius: 30px;
        box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.25);
        }
      &.is--checked{
        &:after{
          right: 11px;
        }
      }
      &.is--disabled{
        box-shadow: none;
        transition: all .13s .13s;
        .sd--switch__knob{
          background-color: #cecece;
          border-color: #cecece;
          box-shadow: none;
          transition: all .23s ease-in-out;
        }
      }
    }
    &__field{
      appearance: none;
      padding:0;
      margin: none;
      width:0;
      height:0;
    }
    &__label{
      line-height: 24px;
    }
  }
</style>
