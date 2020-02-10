<template>
  <sd-portal>
    <transition name="slide-in" appear>
      <div class="sd--toast" v-if="active">
        <div class="sd--toast__content">
          portal to body
        </div>
        <sd-button rounded icon-only size="sm" theme="default" @click="onClose($event)"><sd-icon size="sm" name="close"/></sd-button>
      </div>
    </transition>
  </sd-portal>
</template>

<script>
import SdIcon from '@/layout/SdIcon'
import SdButton from '@/layout/SdButton'
import SdPortal from '@/layout/SdPortal'
export default {
  name: 'SdToast',
  data () {
    return {
      isActive: false
    }
  },
  props: {
    active: Boolean
  },
  watch: {
    active () {
      this.isActive = this.active
    }
  },
  methods: {
    onClose: function (event) {
      this.isActive = false
      this.$emit('closed')
    }
  },
  components: { SdPortal, SdIcon, SdButton }
}
</script>

<style lang="scss" scoped>
.sd--toast{
  position:fixed;
  top: 75px;
  left: 50%;
  background-color: red;
  max-width: 300px;
  z-index: 1000;
  transform: translate3d(-50%, 0%, 0);
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 3px;
  &__content{
    margin-right: 8px;
  }
}
</style>
