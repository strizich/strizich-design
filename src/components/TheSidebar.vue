<template>
  <div class="sidebar">
    <div class="sidebar__header">
      Things go here
    </div>
    <nav>
      <sd-list>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
        <sd-list-item loading/>
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
  width:300px;
  &__header{
    background-color: var(--secondary);
    padding:16px;
  }
}
</style>
