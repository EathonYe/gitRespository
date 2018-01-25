<template>
<div class="article">
  <div class="article-title">{{article.title}}</div>
  <div class="article-msg">
    <span>发布于{{createdTime}}</span>
    <span>作者{{article.author.loginname}}</span>
    <span>{{article.visit_count}}次浏览</span>
    <span>来自&nbsp;{{article.tab}}</span>
  </div>
  <div class="article-content" v-html="article.content"></div>
</div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      default: function () {
        return {
          title: '',
          author: {
            loginname: 'temp'
          },
          visit_count: '',
          tab: '',
          content: '',
          create_at: '2017-04-130000',
          replies: ''
        }
      }
    }
  },
  computed: {
    createdTime () {
      const now = Date.now()
      const theTime = new Date(this.article.create_at)
      const diff = now - theTime
      const seconds = diff / 1000
      const minutes = seconds / 60
      const hours = minutes / 60
      const days = hours / 24
      if (days >= 1) {
        return Math.ceil(days) + '天前'
      } else if (hours >= 1) {
        return Math.ceil(hours) + '小时前'
      } else if (minutes >= 1) {
        return Math.ceil(minutes) + '分钟前'
      } else if (seconds >= 1) {
        return Math.ceil(seconds) + '秒前'
      } else {
        return '现在'
      }
    }
  }
}
</script>

<style>
.article {
  width: 65%;
  min-height: 300px;
  background-color: #F9FAFC;
  border: 1px solid #ddd;
  padding: 30px 20px;
  line-height: 1.6;
  font-size: 15px;
  color: #333;
}
.article .article-title {
  font-size: 22px;
  font-weight: bold;
}
.article .article-msg {
  font-size: 14px;
  color: #8492A6;
}
.article .article-msg span {
  position: relative;
  margin-left: 13px;
}
.article .article-msg span::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 6px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #8492A6;
}
.article .article-content img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
.article .article-content ul li {
  margin-left: 25px;
}
</style>
