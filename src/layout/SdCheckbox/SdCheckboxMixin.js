// TODO: Add a focus state for when the user
// clicks the 'tab' key and focuses each checkbox.

export default {
  props: {
    model: [String, Boolean, Object, Number, Array],
    value: [String, Boolean, Object, Number],
    name: [String, Number],
    required: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    fieldType: {
      type: String,
      default: 'sd--checkbox'
    }
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  computed: {
    attributes: function () {
      const attrs = {
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        'true-value': this.trueValue,
        'false-value': this.falseValue
      }
      if (this.$options.propsData.hasOwnProperty('value')) {
        if (this.value === null || typeof this.value !== 'object') {
          attrs.value = (this.value === null || this.value === undefined) ? '' : String(this.value)
        }
      }
      return attrs
    },
    isSelected: function () {
      if (this.isModelArray) {
        return this.model.includes(this.value)
      }
      if (this.hasValue) {
        return this.model === this.value
      }
      return this.model === this.trueValue
    },
    isModelArray: function () {
      return Array.isArray(this.model)
    },
    checkClasses: function () {
      return {
        'is--checked': this.isSelected,
        'is--disabled': this.disabled,
        'is--required': this.required,
        'is--indeterminate': this.indeterminate
      }
    },
    hasValue: function () {
      return this.$options.propsData.hasOwnProperty('value')
    }
  },
  methods: {
    removeItemFromModel: function (newModel) {
      const index = newModel.indexOf(this.value)
      if (index !== -1) {
        newModel.splice(index, 1)
      }
    },
    handleArrayCheckbox: function () {
      const newModel = this.model
      if (!this.isSelected) {
        newModel.push(this.value)
      } else {
        this.removeItemFromModel(newModel)
      }
      this.$emit('change', newModel)
    },
    handleSingleSelectCheckbox: function () {
      this.$emit('change', this.isSelected ? null : this.value)
    },
    handleSimpleCheckbox: function () {
      this.$emit('change', this.isSelected ? this.falseValue : this.trueValue)
    },
    toggleCheck () {
      if (!this.disabled) {
        if (this.isModelArray) {
          this.handleArrayCheckbox()
        } else if (this.hasValue) {
          this.handleSingleSelectCheckbox()
        } else {
          this.handleSimpleCheckbox()
        }
      }
    }
  }
}
