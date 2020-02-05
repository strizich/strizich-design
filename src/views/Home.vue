<template>
  <div class="home">
    <home-mast/>
    <sd-modal :active.sync="modalActive">
      <sd-modal-title>
        <h3>Blah</h3>
        <sd-button theme="default" flat rounded @click="modalActive = false" icon-only >
          <sd-icon name="close"/>
        </sd-button>
      </sd-modal-title>
      <sd-modal-content>
        <p>Vestibulum id ante eu tellus mattis ullamcorper. Morbi luctus consectetur nulla. Fusce eu lacus convallis, elementum augue ut, accumsan enim. Praesent interdum nisl eros, at rhoncus sapien feugiat nec. Maecenas quis tincidunt augue, ut pellentesque diam. Nulla rutrum commodo sem nec viverra. Curabitur consectetur augue a eros egestas finibus. Nunc tincidunt diam pellentesque auctor pharetra.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus orci ante, vel pulvinar diam convallis eget. Sed egestas erat ut velit egestas tincidunt. Duis vel magna enim. Ut lacinia tincidunt malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis id nunc et velit ultrices semper non eget augue. Vestibulum venenatis varius ante vitae volutpat. Aenean pulvinar convallis malesuada. Donec quis sapien augue. Nam eleifend id sem ac rutrum. Etiam bibendum nulla vitae ante lobortis dapibus a semper nibh. Aenean eu quam ut magna gravida molestie.</p>
        <p>Morbi mi diam, efficitur sed turpis id, volutpat accumsan felis. Etiam hendrerit sem lorem. Cras rhoncus purus at tortor auctor venenatis. Vivamus augue lectus, venenatis vitae lectus ut, accumsan accumsan velit. Maecenas et orci sed metus posuere ultrices eu a lorem. Phasellus ut quam vel orci finibus egestas. Sed vestibulum posuere egestas. Mauris accumsan ex nisi, vitae imperdiet sapien lobortis ut. Nam feugiat pulvinar ligula eget finibus. Pellentesque volutpat elit a urna cursus posuere. Duis sapien arcu, tristique sed quam quis, vestibulum porttitor nibh.</p>
        <p>Vestibulum id ante eu tellus mattis ullamcorper. Morbi luctus consectetur nulla. Fusce eu lacus convallis, elementum augue ut, accumsan enim. Praesent interdum nisl eros, at rhoncus sapien feugiat nec. Maecenas quis tincidunt augue, ut pellentesque diam. Nulla rutrum commodo sem nec viverra. Curabitur consectetur augue a eros egestas finibus. Nunc tincidunt diam pellentesque auctor pharetra.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus orci ante, vel pulvinar diam convallis eget. Sed egestas erat ut velit egestas tincidunt. Duis vel magna enim. Ut lacinia tincidunt malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis id nunc et velit ultrices semper non eget augue. Vestibulum venenatis varius ante vitae volutpat. Aenean pulvinar convallis malesuada. Donec quis sapien augue. Nam eleifend id sem ac rutrum. Etiam bibendum nulla vitae ante lobortis dapibus a semper nibh. Aenean eu quam ut magna gravida molestie.</p>
        <p>Morbi mi diam, efficitur sed turpis id, volutpat accumsan felis. Etiam hendrerit sem lorem. Cras rhoncus purus at tortor auctor venenatis. Vivamus augue lectus, venenatis vitae lectus ut, accumsan accumsan velit. Maecenas et orci sed metus posuere ultrices eu a lorem. Phasellus ut quam vel orci finibus egestas. Sed vestibulum posuere egestas. Mauris accumsan ex nisi, vitae imperdiet sapien lobortis ut. Nam feugiat pulvinar ligula eget finibus. Pellentesque volutpat elit a urna cursus posuere. Duis sapien arcu, tristique sed quam quis, vestibulum porttitor nibh.</p>
      </sd-modal-content>
      <sd-modal-footer>
        <sd-button theme="danger" @click="modalActive = false">Dangerous</sd-button>
      </sd-modal-footer>
    </sd-modal>
    <sd-button @click="modalActive = !modalActive">
      Show me the modal!
    </sd-button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus orci ante, vel pulvinar diam convallis eget. Sed egestas erat ut velit egestas tincidunt. Duis vel magna enim. Ut lacinia tincidunt malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis id nunc et velit ultrices semper non eget augue. Vestibulum venenatis varius ante vitae volutpat. Aenean pulvinar convallis malesuada. Donec quis sapien augue. Nam eleifend id sem ac rutrum. Etiam bibendum nulla vitae ante lobortis dapibus a semper nibh. Aenean eu quam ut magna gravida molestie.</p>

    <sd-container>
      <sd-row gutterless>
        <sd-col :width="2" style="background-color: green" break="md">
          Col 2
        </sd-col>
        <sd-col :width="4" style="background-color: red" break="lg">
          Col 4
        </sd-col>
      </sd-row>
    </sd-container>
  </div>

</template>

<script>
import HomeMast from '@/components/HomeMast'

import SdRow from '@/layout/SdGrid/SdRow'
import SdContainer from '@/layout/SdGrid/SdContainer'
import SdCol from '@/layout/SdGrid/SdCol'
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
    SdIcon,
    SdContainer,
    SdRow,
    SdCol
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
