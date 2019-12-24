<template>
  <div class="article">
    <article-mast :title="title" imgSrc="Q9Mfd5PSn2bEULCnYRi7" ratio="4:3"/>
    <div class="article__content">
      <vue-markdown>
        # hello nurse
      </vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import ArticleMast from '@/components/ArticleMast'
export default {
  name: 'Article',
  data () {
    return {
      title: 'Article Page'
    }
  },
  components: { ArticleMast, VueMarkdown }
}
</script>

<style lang="scss" scoped>
.article{
  &__content{
    padding: 0 16px;
  }
}
</style>
