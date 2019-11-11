import SdPropValidator from '@/utilities/SdPropValidator.js'

const spacing = ['inset', 'offset', 'none']

export default {
  props: {
    spacing: {
      type: String,
      default: 'inset',
      ...SdPropValidator('spacing', spacing)
    }
  },
  computed: {
    spacingClasses: function () {
      if (this.spacing !== 'none') {
        return `is--${this.spacing}`
      }
      return null
    }
  }
}
