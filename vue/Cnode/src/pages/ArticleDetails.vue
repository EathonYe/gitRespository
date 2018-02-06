<template>
<div class="article-details">
  <div class="left-container">
    <Article :article="article" />
    <div class="reply">
      <reply v-for="(reply, key) in article.replies" :key="key" :reply="reply"></reply>
    </div>
  </div>
  <div class="side-bar">
    <Label>
      <author-msg :name="article.author.loginname"></author-msg>
    </Label>
  </div>
</div>
</template>

<script>
import Article from '@/components/Article'
import Label from '@/components/Label'
import AuthorMsg from '@/components/AuthorMsg'
import Reply from '@/components/Reply'
export default {
  name: 'ArticleDetails',
  data () {
    return {
      article: {
        author: {
          loginname: ''
        }
      }
    }
  },
  components: {
    Article,
    Label,
    AuthorMsg,
    Reply
  },
  mounted () {
    this.$http({
      method: 'get',
      url: `https://cnodejs.org/api/v1${this.$route.path}`
    }).then((res) => {
      if (res.data.success) {
        this.article = res.data.data
      } else {
        console.log('Article.vue', res)
      }
    }).catch((res) => {
      console.log('Article.vue', res)
    })
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
.left-container {
  width: 65%;
}
.article-details .side-bar {
  width: calc(18% + 20px);
  padding-left: 20px;
}
.reply {
  background-color: #F9FAFC;
  border: 1px solid #ddd;
  margin-top: 15px;
}
</style>
