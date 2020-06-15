<template>
  <div>
    <sd-button @click="modalOne = true">
      Show Me
    </sd-button>
    <sd-dialog :active.sync="modalOne">
      <sd-dialog-title>
        <h3>I am title &mdash; [modalOne]</h3>
        <sd-button @click="modalOne = false" theme="default" icon-only flat rounded>
          <sd-icon name="close"/>
        </sd-button>
      </sd-dialog-title>
      <sd-dialog-content>
        <p>Modal Content</p>
      </sd-dialog-content>
      <sd-dialog-footer>
        <span>Modal Footer</span>
      </sd-dialog-footer>
    </sd-dialog>
  </div>

</template>

<script>
import SdButton from '@/layout/SdButton'
import SdIcon from '@/layout/SdIcon'
import SdDialog from '@/layout/SdDialog/SdDialog'
import SdDialogTitle from '@/layout/SdDialog/SdDialogTitle'
import SdDialogContent from '@/layout/SdDialog/SdDialogContent'
import SdDialogFooter from '@/layout/SdDialog/SdDialogFooter'

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
    SdDialog,
    SdDialogTitle,
    SdDialogContent,
    SdDialogFooter
  }
}
</script>

<style lang="scss" scoped>

</style>
