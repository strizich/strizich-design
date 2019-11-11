import SdPropValidator from '@/utilities/SdPropValidator.js'

const alignment = ['flex-start', 'flex-end', 'space-between']

export default {
  props: {
    align: {
      type: String,
      default: 'flex-start',
      ...SdPropValidator('align', alignment)
    }
  },
  computed: {
    alignmentStyle: function () {
      return {
        'justify-content': this.align
      }
    }
  }
}
