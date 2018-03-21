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
      loading: true
    }
  },
  computed: {
    content () {
      return this.$store.state.content
    }
  },
  methods: {
    getData () {
      this.$store.dispatch('getContent')
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
