import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import BlogPost from '../views/BlogPost.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: function () { // lazy-loaded
			// @ts-ignore
			return import(/* webpackChunkName: "about" */ '../views/About.vue')
		}
	},
	{
		path: '/blog/latest',
		name: 'latest-blog-post',
		props: true,
		component: function () { // lazy-loaded
			// @ts-ignore
			return import(/* webpackChunkName: "latest-blog-post" */ '../views/LatestBlogPost')
		}
	},
	{
		path: '/blog/:id',
		name: 'blog-post',
		props: true,
		component: BlogPost
	}
]

const router = new VueRouter({
	routes
})

export default router
