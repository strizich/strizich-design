<template>
  <main class="sd--app">
      <portal-target name="body" multiple />
      <div class="sd--app__wrapper">
        <slot/>
      </div>
  </main>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss">

</style>
