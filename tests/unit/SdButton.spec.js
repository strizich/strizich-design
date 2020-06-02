import { mount } from '@vue/test-utils'
import SdButton from '@/layout/SdButton/SdButton'

describe('SdButton', () => {
  it('should create the default classes', () => {
    const wrapper = mount(SdButton)
    const buttonContent = wrapper.find('.sd--button__content')
    expect(wrapper.classes('sd--button')).toBe(true)
    expect(wrapper.classes()).toContain('sd--button__primary')
    expect(buttonContent.classes()).toContain('is--md')
  })

  it('should create the modifier classes', () => {
    const wrapper = mount(SdButton, {
      propsData: {
        disabled: true,
        outline: true,
        flat: true,
        pill: true,
        rounded: true
      }
    })
    expect(wrapper.classes()).toContain('is--disabled')
    expect(wrapper.classes()).toContain('is--outline')
    expect(wrapper.classes()).toContain('is--flat')
    expect(wrapper.classes()).toContain('is--pill')
    expect(wrapper.classes()).toContain('is--rounded')
  })

  it('should create the size class', () => {
    const wrapper = mount(SdButton, {
      propsData: {
        size: 'lg'
      }
    })
    const buttonContent = wrapper.find('.sd--button__content')
    expect(buttonContent.classes()).toContain('is--lg')
  })
})
