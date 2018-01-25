<template>
    <div class="author-msg">
        <div>作者</div>
        <div class="author-msg_photo">
          <img :src="authorInfo.avatar_url" alt="">
          <span>{{name}}</span>
        </div>
        <div>积分: {{authorInfo.score}}</div>
        <div class="author-msg_githuburl">Github: <a :href="githubUrl" target="_blank">{{githubUrl}}</a></div>
    </div>
</template>

<script>
export default {
  name: 'AuthorMsg',
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      authorInfo: {
        avatar_url: '',
        loginname: 'temp'
      }
    }
  },
  computed: {
    githubUrl () {
      return `https://github.com/${this.authorInfo.githubUsername}`
    }
  },
  watch: {
    name (newValue) {
      this.$http({
        method: 'get',
        url: `https://cnodejs.org/api/v1/user/${newValue}`
      }).then((res) => {
        this.authorInfo = res.data.data
      }).catch((res) => {
        console.log('SideSec.vue :', res)
      })
    }
  }
}
</script>

<style>
.author-msg {
  font-size: 14px;
  color: #333;
}
.author-msg div {
  margin-top: 10px;
}
.author-msg_photo {
  line-height: 45px;
}
.author-msg .author-msg_photo img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
}
.author-msg .author-msg_photo span {
  font-size: 16px;
  color: #8492A6;
}
.author-msg .author-msg_githuburl a {
  font-style: oblique;
  color: #333;
}
</style>
