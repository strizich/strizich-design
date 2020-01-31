<template>
  <div>
    <sd-button @click="modalOne = true">
      Show Me
    </sd-button>
    <sd-modal :active.sync="modalOne">
      <sd-modal-title>
        <h3>I am title &mdash; [modalOne]</h3>
        <sd-button @click="modalOne = false" theme="default" icon-only flat rounded>
          <sd-icon name="close"/>
        </sd-button>
      </sd-modal-title>
      <sd-modal-content>
        <p>Modal Content</p>
      </sd-modal-content>
      <sd-modal-footer>
        <span>Modal Footer</span>
      </sd-modal-footer>
    </sd-modal>
  </div>

</template>

<script>
import SdButton from '@/layout/SdButton'
import SdIcon from '@/layout/SdIcon'
import SdModal from '@/layout/SdModal/SdModal'
import SdModalTitle from '@/layout/SdModal/SdModalTitle'
import SdModalContent from '@/layout/SdModal/SdModalContent'
import SdModalFooter from '@/layout/SdModal/SdModalFooter'

export default {
  name: 'ModalGroup',
  data () {
    return {
      modalOne: false
    }
  },
  components: {
    SdButton,
    SdIcon,
    SdModal,
    SdModalTitle,
    SdModalContent,
    SdModalFooter
  }
}
</script>

<style lang="scss" scoped>

</style>
