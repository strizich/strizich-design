  <!-- <button :id="id" :class="['sd--button', themeClass, modifiers]">
    <div :class="['sd--button__content', sizeClass]" :style="alignmentStyle">
      <slot/>
    </div>
    </button> -->

<script>
import SdFocused from '@/core/mixins/SdFocused'
import sdUuid from '@/utilities/SdUuid'
import SdRouterLink from '@/core/mixins/SdRouterLink'
import SdRouterLinkProps from '@/utilities/SdRouterLinkProps'
// import SdPropValidator from '@/utilities/SdPropValidator'
export default {
  name: 'SdButton',
  mixins: [SdFocused, SdRouterLink],
  props: {
    type: {
      type: String,
      default: 'button'
    },
    href: String,
    id: {
      type: String,
      default: () => 'sd--button--' + sdUuid()
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    theme: {
      type: String,
      default: 'primary'
    },
    align: {
      type: String,
      default: 'center'
      // ...SdPropValidator('start', 'end', 'center')
    },
    full: Boolean,
    block: Boolean,
    iconOnly: Boolean
  },
  computed: {
    isRouterLink: function () {
      return this.$router && this.to
    },
    modifiers: function () {
      return {
        'is--focused': this.sdHasFocus,
        'is--disabled': this.disabled,
        'is--rounded': this.rounded,
        'is--pill': this.pill,
        'is--flat': this.flat,
        'is--outline': this.outline,
        'is--icon-only': this.iconOnly,
        'is--full': this.full,
        'is--block': this.block
      }
    },
    alignmentStyle: function () {
      return {
        'justify-content': this.align
      }
    },
    sizeClass: function () {
      return `is--${this.size}`
    },
    themeClass: function () {
      return `sd--button__${this.theme}`
    }
  },
  render (createElement) {
    const buttonContent = createElement('div', {
      staticClass: 'sd--button__content',
      class: [
        this.sizeClass
      ],
      style: [
        this.alignmentStyle
      ]
    }, this.$slots.default)

    let buttonAttributes = {
      staticClass: 'sd--button',
      class: {
        [this.themeClass]: true,
        ...this.modifiers
      },
      attrs: {
        ...this.modifiers,
        disabled: this.disabled,
        type: !this.href && (this.type || 'button'),
        href: this.href
      }
    }

    let tag = 'button'

    if (this.href) {
      tag = 'a'
    } else if (this.isRouterLink) {
      this.$options.props = SdRouterLinkProps(this, this.$options.props)
      tag = 'router-link'
      const exactActiveClass = this.$props.exactActiveClass
      const activeClass = `${this.$props.activeClass} is--active`
      buttonAttributes.props = {
        ...this.$props,
        exactActiveClass,
        activeClass
      }
      delete buttonAttributes.props.type
      delete buttonAttributes.attrs.type
      delete buttonAttributes.props.href
      delete buttonAttributes.attrs.href
    }
    return createElement(tag, buttonAttributes, [buttonContent])
  }
}
</script>

<style lang="scss">

.sd--button {
  touch-action: manipulation;
  -webkit-user-select: none;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  display:inline-flex;
  align-items: center;
  padding: 0;
  &__content{
    position: relative;
    z-index: 10;
    flex-grow: 2;
    transition: padding .23s, font-size .23s;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    .sd--icon{
      margin-top: -8px;
      margin-bottom: -8px;
      margin-right: 8px;
    }
    &.is{
      &--sm{
        font-size: rem(14);
        line-height: rem(14);
        padding: spacing(inset, sm);
        min-width: 30px;
      }
      &--md{
        font-size: rem(16);
        line-height: rem(16);
        padding: spacing(offset);
        min-width: 43px;
      }
      &--lg{
        font-size: rem(18);
        line-height: rem(18);
        padding: 16px 24px
      }
    }
  }
  &__icon{
    &--left{
       margin: -8px 8px -8px -8px;
    }
    &--right{
       margin: -8px -8px -8px 8px;
    }
  }
  @each $state, $color in $sd-color-global {
    $base: nth($color, 1);
    $lighter: nth($color, 2);
    $darker: nth($color, 3);
    $contrast: sd-pick-contrast($base);
    $contrast-highlight: sd-pick-contrast($lighter);
    $contrast-accent: sd-pick-contrast($darker);
    &__#{$state} {
      @include sd--elevation(2);
      color: sd-color($contrast, text);
      background-color: $base;
      transition: all .2s ease-out;
      border-radius: 3px;
      &:hover {
        @include sd--elevation(4);
        color: sd-color($contrast-accent, text);
        background-color: $darker;
        transition: all .2s ease-out;
      }
      &:active {
        @include sd--elevation(6);
        color: sd-color($contrast-highlight, text);
        background-color: $lighter;
        transition: all .2s ease-out;
      }
      &.is{
        &--block{
          display:block;
          width:100%;
        }
        &--icon-only{
          display:flex;
          align-items:center;
          justify-content: center;
          .is{
            &--sm, &--md, &--lg{
              padding:0;
              margin:0;
              display:flex;
              text-emphasis: center;
              align-items: center;
              justify-content: center;
              min-width: 0;
              .sd--icon{
                padding:0;
                margin:0;
              }
            }
            &--sm {
              width: 24px;
              height: 24px;
            }
            &--md {
              width: 32px;
              height: 32px;
            }
            &--lg {
              width: 52px;
              height: 52px;
            }
          }
        }
        &--outline {
          border: 1px solid $base;
          background:none;
          @include flatten($base, $lighter, $darker, $contrast);
        }
        &--flat {
          background: none;
          border: none;
          outline: none;
          @include flatten($base, $lighter, $darker, $contrast);
        }
        &--rounded{
          border-radius: 30px;
        }
        &--pill{
          border-radius: 30px;
          .sd--button__content {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
        &--focused {
          box-shadow: 0 0 0 5px $lighter;
          transition: all .2s ease-out;
        }
      }
    }
  }
}
</style>
