<template>
  <nav class="sidebar">
    <sd-list>
        <sd-list-item>
          <router-link
            class="link"
            exact-active-class="link--active"
            to="/">
            Home
          </router-link>
        </sd-list-item>
        <sd-list-item>
          <router-link
            class="link"
            exact-active-class="link--active"
            to="article">
              Article
          </router-link>
        </sd-list-item>
        <sd-list-item>
          <router-link
            class="link"
            exact-active-class="link--active"
            to="about">
              About
          </router-link>
        </sd-list-item>
    </sd-list>
  </nav>
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
  &__header{
    background-color: var(--background-accent);
    padding:16px;
  }
}
.link {
  color: var(--text);
  display:block;
  padding: 16px 0 16px 16px;
  margin-right: -16px;
  margin-left: -16px;
  transition: background-color .23s ease-in-out;
  &:after{
    transition: left .23s ease-in-out;
    content: '';
    display:block;
    position: absolute;
    bottom:0;
    right:0;
    left: 100%;
    border-bottom: 2px solid var(--primary)
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
