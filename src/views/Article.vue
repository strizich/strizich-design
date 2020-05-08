<template>
  <div class="article">
    <article-mast :title="title" imgSrc="Q9Mfd5PSn2bEULCnYRi7" ratio="4x3"/>
    <sd-container full>
      <vue-markdown :source="placeholder" />
    </sd-container>
  </div>
</template>

<script>
import SdContainer from '@/layout/SdGrid/SdContainer'
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
  components: { ArticleMast, VueMarkdown, SdContainer },
  metaInfo: {
    title: 'Article'
  }
}
</script>

<style lang="scss" scoped>

</style>
