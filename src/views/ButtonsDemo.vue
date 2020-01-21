<template>
  <div class="container">
    <button-group/>
    <hr class="sd--divider sd--divider--lg" />
    <div class="demo__description">
      <p>Stuff like API and useage goes here.</p>
    </div>
  </div>
</template>

<script>
import ButtonGroup from '@/components/library/ButtonGroup'
export default {
  components: {
    ButtonGroup
  }
}
</script>

<style lang="scss" scoped>
  .container{
    padding: 32px;
  }
</style>
