<template>
  <div>
    <div class="modal">
      <sd-button class="modal__trigger" @click="modalOne = true">
        Show Default Modal
      </sd-button>

      <sd-button @click="modalTwo = true">
        Show Aside Modal
      </sd-button>
    </div>

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

    <sd-dialog :active.sync="modalTwo" aside>
      <sd-dialog-title>
        <h3>I am title &mdash; [modalOne]</h3>
        <sd-button @click="modalTwo = false" theme="default" icon-only flat rounded>
          <sd-icon name="close"/>
        </sd-button>
      </sd-dialog-title>
      <sd-dialog-content>
        <p>Modal Content</p>
      </sd-dialog-content>
      <sd-dialog-footer>
        <sd-button flat @click="modalTwo = false">Close Modal</sd-button>
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
      modalOne: false,
      modalTwo: false
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
  .modal{
    &__trigger{
      margin-right: 16px;
    }
  }
</style>
