<template>
    <div class="sec-container">
      <!-- <router-link v-for="item of content" :key="item.id" :to="{name: 'Article', params: {id: item.id}}">
      </router-link> -->
      <Section v-for="item of content" :key="item.id" :item="item"></Section>
    </div>
</template>

<script>
import Section from '@/components/Section'
export default {
  name: 'MainSec',
  data () {
    return {
      loading: true,
      content: [],
      limit: 0
    }
  },
  methods: {
    getData () {
      this.limit += 10
      this.$http({
        type: 'get',
        url: 'https://cnodejs.org/api/v1/topics',
        params: {
          page: 1,
          limit: this.limit,
          mdrender: 'false'
        }
      }).then((res) => {
        if (res.data.success) {
          this.content = res.data.data
        } else {
          console.log('Main.vue', res)
        }
      }).catch((res) => {
        console.log('Main.vue', res)
      })
    },
    scrollMethod () {
      const sumH = document.documentElement.scrollHeight || document.body.scrollHeight
      const viewH = document.documentElement.clientHeight
      const scrollH = document.body.scrollTop || document.documentElement.scrollTop
      if (viewH + scrollH >= sumH) {
        this.getData()
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollMethod)
    this.getData()
  },
  created () {
  },
  components: {
    Section
  }
}
</script>

<style>
.sec-container {
    width: 80%;
    min-height: 400px;
    margin: 0 auto;
    border: 1px solid #ddd;
    background: #F9FAFC;
    padding: 20px;
}
</style>
