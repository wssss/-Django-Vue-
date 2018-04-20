import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import post from '@/pages/post'
import posts from '@/pages/posts'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/posts/:id',
			name: 'post',
			component: post
		},
		{
		  path: '/posts',
		  name: 'posts',
		  component:posts
		}
	]
})
