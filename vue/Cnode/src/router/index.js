import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        main: Main // 对应router-view
      }
    },
    {
      path: '/topic/:id',
      name: 'Article',
      components: {
        main: Article
      }
    }
  ]
})
