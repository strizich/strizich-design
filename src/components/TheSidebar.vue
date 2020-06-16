<template>
  <nav class="sidebar">
    <sd-list class="sidebar__list">
      <template v-for="(section, i) in navigationConfig">
        <sd-list-header v-if="section.name" :key="i" :title="section.name"/>
        <sd-list-item v-for="link in section.children" :key="link.route" link>
          <router-link
            class="link"
            exact-active-class="link--active"
            :to="link.route">
              {{link.name}}
          </router-link>
          <!-- <template v-if="link">
            <router-link
              v-for="sublink in link.children"
              tag="div"
              class="sublink"
              exact-active-class="link--active"
              :key="sublink.name"
              :to="sublink.route">
                {{sublink.name}}
            </router-link>
          </template> -->
        </sd-list-item>
      </template>
    </sd-list>
  </nav>
</template>

<script>
import SdList from '@/layout/SdList/SdList'
import SdListItem from '@/layout/SdList/SdListItem'
import SdListHeader from '@/layout/SdList/SdListHeader'
import navigationConfig from '@/core/navigation.config'

export default {
  data () {
    return {
      navigationConfig
    }
  },
  props: {
    overlay: Boolean
  },
  computed: {
    classes: function () {
      return {
        'is--overlay': this.overlay
      }
    }
  },
  components: {
    SdList,
    SdListItem,
    SdListHeader
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  max-width: 230px;
  height: 100%;
  &.is {
    &--overlay{
      position:fixed;
      top:50px;
      bottom: 50px;
      width: 230px;
    }
  }
  @include breakpoint-down(sm){
    max-width: 100%;
  }
  // &__list{
  //   position: fixed;
  //   top:50px;
  //   width:230px;
  //   left:0;
  //   overflow-x: none;
  //   overflow-y: auto;
  //   @include breakpoint-down(sm){
  //     width: 100%;
  //     position:static;
  //   }
  // }
}
.sidebar__list{
  padding-bottom: 50px;
}
.link {
  color: var(--text);
  display:block;
  padding: 16px 0 16px 16px;
  transition: background-color .23s ease-in-out, color .23s ease-in-out;
  &--active {
    color: var(--primary-highlight);
    background-color: var(--background-accent);
    font-weight: 500;
  }
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
    background-color: var(--background-accent);
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
