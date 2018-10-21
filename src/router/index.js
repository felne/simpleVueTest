import Vue from 'vue'
import Router from 'vue-router'
import stageOne from '@/pages/stageOne'
import stageTwo from '@/pages/stageTwo'
import stageThree from '@/pages/stageThree'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'stageOne',
      component: stageOne
    },
    {
      path: '/stageTwo',
      name: 'stageTwo',
      component: stageTwo
    },
    {
      path: '/stageThree',
      name: 'stageThree',
      component: stageThree
    },
  ]
})
