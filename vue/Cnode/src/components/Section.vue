<template>
<section class="section">
  <div class="section-left">
    <img :src="item.author.avatar_url" :title="item.author.loginname" />
    <div class="section-number">
      <span class="section-number_reply" title="回复数">{{item.reply_count}}</span>&nbsp;/&nbsp;<span class="section-number_click" title="点击数">{{item.visit_count}}</span>
    </div>
    <div class="section-title">
      <router-link :to="{name: 'ArticleDetails', params: {id: item.id}}">
        <span>{{item.title}}</span>
      </router-link>
      </div>
  </div>
  <div class="section-right">{{last_reply_at}}</div>
</section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          created_at: '5分钟前'
        }
      }
    }
  },
  computed: {
    last_reply_at () {
      const now = Date.now()
      const theTime = new Date(this.item.last_reply_at)
      const diff = now - theTime
      const seconds = diff / 1000
      const minutes = seconds / 60
      const hours = minutes / 60
      const days = hours / 24
      if (days >= 1) {
        return Math.floor(days) + '天前'
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
.section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #C0CCDA;
  padding: 5px 0px;
  color: #333;
  cursor: auto;
}
.section-left {
  display: flex;
  justify-content: flex-start;
  width: 90%;
  height: 100%;
}
.section img {
  width: 40px;
  height: 40px;
  margin-top: 5px;
  cursor: pointer;
}
.section .section-number {
  width: 120px;
  text-align: center;
  font-size: 14px;
}
.section .section-number .section-number_click {
  color: #8492A6;
}
.section .section-title {
  width: calc(100% - 40px - 120px);
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.section .section-title a {
  color: #333;
  cursor: pointer;
  transition: all 0.5s;
}
.section .section-title a:visited {
  color: grey;
}
.section .section-title a:hover {
  /* text-decoration: underline; */
  color: #000;
  font-size: 22px;
}
.section .section-title a:visited:hover {
  color: #5c5757;
}
.section .section-right {
  overflow: hidden;
  white-space: nowrap;
  color: #8492A6;
  font-size: 14px;
  cursor:pointer;
}
</style>
