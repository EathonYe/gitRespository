import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import ArticleDetails from '@/pages/ArticleDetails'

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
      name: 'ArticleDetails',
      components: {
        main: ArticleDetails
      }
    }
  ]
})
