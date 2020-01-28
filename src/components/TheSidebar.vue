<template>
  <nav class="sidebar">
    <sd-list>
        <sd-list-item link>
          <router-link
            class="link"
            exact-active-class="link--active"
            to="/">
            Home
          </router-link>
        </sd-list-item>
        <sd-list-item link>
          <router-link
            class="link"
            exact-active-class="link--active"
            to="article">
              Article
          </router-link>
        </sd-list-item>
        <sd-list-item link>
          <router-link
            class="link"
            exact-active-class="link--active"
            to="about">
              About
          </router-link>
        </sd-list-item>
        <sd-list-header title="Components"/>
        <sd-list-item link>
          <router-link
            class="link"
            exact-active-class="link--active"
            to="buttons">
              Buttons
          </router-link>
        </sd-list-item>
    </sd-list>
  </nav>
</template>

<script>
import SdList from '@/layout/SdList/SdList'
import SdListItem from '@/layout/SdList/SdListItem'
import SdListHeader from '@/layout/SdList/SdListHeader'

export default {
  components: {
    SdList,
    SdListItem,
    SdListHeader
  }
}
</script>

<style lang="scss" scoped>
.link {
  color: var(--text);
  display:block;
  padding: 16px 0 16px 16px;
  transition: background-color .23s ease-in-out;
  &:after{
    transition: left .23s ease-in-out;
    content: '';
    display:block;
    position: absolute;
    bottom:0;
    right:0;
    left: 100%;
    border-bottom: 2px solid var(--primary);
  }
  &:hover{
    background-color: var(--background);
  }
  &--active{
    &:after{
      transition: left .23s ease-in-out;
      bottom:0;
      right:0;
      left: 16px;
      border-bottom: 2px solid var(--primary)
    }
  }
}
</style>
