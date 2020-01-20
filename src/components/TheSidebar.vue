<template>
  <div class="sidebar">
    <nav>
      <sd-list>
          <sd-list-item>
            <router-link class="sd--link" to="/">Home</router-link>
          </sd-list-item>
          <sd-list-item>
            <router-link class="sd--link" to="article">Article</router-link>
          </sd-list-item>
      </sd-list>
    </nav>
  </div>
</template>

<script>
import SdList from '@/layout/SdList/SdList'
import SdListItem from '@/layout/SdList/SdListItem'
export default {
  components: {
    SdList,
    SdListItem
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  width: 300px;
  &__header{
    background-color: var(--background-accent);
    padding:16px;
  }
}
</style>
