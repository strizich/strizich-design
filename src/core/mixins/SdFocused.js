import SdReactive from '@/utilities/SdReactive'

let hasEvents = false
let eventTarget = null
let supportsPassiveEvent = false
let SdFocused = new SdReactive({
  currentElement: null
})

function checkPassiveEventSupport () {
  try {
    let opts = Object.defineProperty({}, 'passive', {
      get () {
        supportsPassiveEvent = { passive: true }
      }
    })
    window.addEventListener('ghost', null, opts)
  } catch (e) {}
}

function setKeyboardInteraction ({ keycode, target }) {
  SdFocused.currentElement = target
}

function setMouseAndTouchInteraction (event) {
  SdFocused.currentElement = null
}

function createKeyboardEvents () {
  eventTarget.addEventListener('keyup', setKeyboardInteraction)
}

function createPointerEvents () {
  eventTarget.addEventListener('pointerup', setMouseAndTouchInteraction)
}

function createMSPointerEvents () {
  eventTarget.addEventListener('MSPointerUp', setMouseAndTouchInteraction)
}

function createMouseAndTouchEvents () {
  eventTarget.addEventListener('mouseup', setMouseAndTouchInteraction)
  if ('ontouchend' in window) {
    eventTarget.addEventListener('touchend', setMouseAndTouchInteraction, supportsPassiveEvent)
  }
}

function bindEvents () {
  if (window.PointerEvent) {
    createPointerEvents()
  } else if (window.MSPointerEvent) {
    createMSPointerEvents()
  } else {
    createMouseAndTouchEvents()
  }

  createKeyboardEvents()
}

function createEvents () {
  if (!hasEvents) {
    eventTarget = document.body
    checkPassiveEventSupport()
    bindEvents()
    hasEvents = true
  }
}
export default {
  data: () => ({
    sdHasFocus: false
  }),
  computed: {
    focusedElement () {
      return SdFocused.currentElement
    }
  },
  watch: {
    focusedElement (el) {
      this.sdHasFocus = el === this.$el
    }
  },
  mounted () {
    createEvents()
  }
}
