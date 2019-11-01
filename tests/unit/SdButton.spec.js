// import { shallowMount } from '@vue/test-utils'
import shallowMount from '@vue/test-utils'
import SdButton from '@/layout/SdButton.vue'

describe('SdButton.vue', () => {
  it('should add classes based on props', () => {
    const localThis = {
      disabled: true,
      rounded: false,
      flat: false,
      outline: false
    }
    expect(SdButton.computed.modList.call(localThis)).toBe('is--disabled')
  })
})
