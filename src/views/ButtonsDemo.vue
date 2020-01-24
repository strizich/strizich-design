<template>
  <div class="page-content">
    <button-group/>
    <article class="demo__description">
      <h1>Header</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus lacinia augue, vitae scelerisque ipsum. Ut cursus venenatis purus, at vehicula lorem ullamcorper id. Quisque sit amet gravida ligula, at elementum magna. Phasellus convallis eu massa ac mattis. Vivamus non libero arcu. Nam venenatis pretium varius. Donec porttitor massa neque, ut auctor turpis dictum at. In pharetra ante sapien, eget consequat tellus eleifend eu. Integer nec leo eget odio aliquam ultricies.</p>

      <p>Pellentesque lobortis ultricies pretium. Phasellus ut maximus tellus, semper pulvinar mauris. Cras accumsan elementum lacus. Integer vulputate odio tortor, interdum dapibus tellus eleifend at. Nulla sagittis pellentesque lacus, nec finibus orci sollicitudin non. Morbi vel iaculis sapien. Vivamus accumsan diam orci, sit amet rhoncus leo vestibulum vestibulum. Proin ac mauris ac mauris hendrerit porta luctus vitae magna. Fusce ultricies fermentum aliquet. Nunc a quam in erat consectetur lobortis in id metus. Donec fermentum eu dui et sagittis. Nunc vitae velit tempus, auctor lectus sed, pretium ipsum. Fusce sit amet tellus sollicitudin, interdum purus a, ultrices turpis. Nam in lacus non elit hendrerit varius id nec eros. Ut quis pharetra nisl.</p>

      <p>Vestibulum id ante eu tellus mattis ullamcorper. Morbi luctus consectetur nulla. Fusce eu lacus convallis, elementum augue ut, accumsan enim. Praesent interdum nisl eros, at rhoncus sapien feugiat nec. Maecenas quis tincidunt augue, ut pellentesque diam. Proin suscipit gravida lacus, quis pharetra ante dictum non. Integer ac commodo augue, viverra commodo est. Vivamus consequat nec mi vel ultricies. Vivamus sagittis iaculis finibus. Aenean varius congue tortor, quis tempor risus lacinia sit amet. Nulla rutrum commodo sem nec viverra. Curabitur consectetur augue a eros egestas finibus. Nunc tincidunt diam pellentesque auctor pharetra.</p>
    </article>
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
  article{
    max-width: 720px;
    margin: 32px auto;
    padding: 0 32px;
  }
</style>
