<template>
  <div class="article">
    <article-mast :title="title" imgSrc="Q9Mfd5PSn2bEULCnYRi7" ratio="4x3"/>
    <div class="article__content">
      <vue-markdown :source="placeholder" />
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import ArticleMast from '@/components/ArticleMast'

const mdPlaceholder = `
# Placeholder content to test out markdown.
## header 2
### header 3

- Unordered List 1
- Unordered List 2
- Unordered List 3

1. OrderedList
2. OrderedList
3. OrderedList
`

export default {
  name: 'Article',
  data () {
    return {
      title: 'Article Page',
      placeholder: mdPlaceholder
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
