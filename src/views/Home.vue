<template>
  <div class="home">
    <home-mast/>
    <sd-modal :active.sync="modalActive">
      <sd-modal-title>
        <h3>Blah</h3>
        <sd-button size="sm" flat rounded @click="modalActive = false" >
          <sd-icon name="close"/>
        </sd-button>
      </sd-modal-title>
      <sd-modal-content>
        <p>Vestibulum id ante eu tellus mattis ullamcorper. Morbi luctus consectetur nulla. Fusce eu lacus convallis, elementum augue ut, accumsan enim. Praesent interdum nisl eros, at rhoncus sapien feugiat nec. Maecenas quis tincidunt augue, ut pellentesque diam. Nulla rutrum commodo sem nec viverra. Curabitur consectetur augue a eros egestas finibus. Nunc tincidunt diam pellentesque auctor pharetra.</p>
      </sd-modal-content>
      <sd-modal-footer>
        <sd-button theme="danger" @click="modalActive = false">Dangerous</sd-button>
      </sd-modal-footer>
    </sd-modal>
    <sd-button @click="modalActive = !modalActive">
      Show me the modal!
    </sd-button>

  </div>
</template>

<script>
import HomeMast from '@/components/HomeMast'
import SdModal from '@/layout/SdModal/SdModal'
import SdModalTitle from '@/layout/SdModal/SdModalTitle'
import SdModalContent from '@/layout/SdModal/SdModalContent'
import SdModalFooter from '@/layout/SdModal/SdModalFooter'
import SdButton from '@/layout/SdButton'
import SdIcon from '@/layout/SdIcon'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      modalActive: false
    }
  },
  components: {
    HomeMast,
    SdModal,
    SdModalTitle,
    SdModalContent,
    SdModalFooter,
    SdButton,
    SdIcon
  },
  metaInfo: {
    title: 'Personal UI framework'
  },
  methods: {
    ...mapMutations([
      'setTitle'
    ])
  },
  mounted () {
    this.setTitle('UI Design Library Built with Vue')
  }
}
</script>

<style lang="scss" scoped>
 .home{
   &__content{
    @include iosSafeArea;
    margin-top: 64px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 32px;
   }
 }

.buttons{
  display: flex;
  justify-content: space-evenly;
}
.cards{
  display:flex;
  max-width: 930px;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  & > .article-card{
     max-width: 50%;
    @include breakpoint-down('md'){
       max-width:100%;
    }
    @include breakpoint-down('sm'){
      max-width:100%;
    }
  }
}
.buttons{
  flex-wrap: wrap;
}
</style>
