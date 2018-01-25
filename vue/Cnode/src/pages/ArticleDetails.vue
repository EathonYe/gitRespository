<template>
<div class="article-details">
  <Article />
</div>
</template>

<script>
import Article from '@/components/Article'
export default {
  name: 'ArticleDetails',
  components: {
    Article
  }
}
</script>

<style>
.article-details {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
