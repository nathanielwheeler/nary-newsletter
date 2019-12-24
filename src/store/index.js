import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
import AuthService from '../AuthService'
import { generateKeyPairSync } from 'crypto'

Vue.use(Vuex)

let baseUrl = location.host.includes('localhost') ? 'https://localhost:3000/' : '/'

let api = Axios.create({
	baseURL: baseUrl + "api/",
	timeout: 3000,
	withCredentials: true
})

export default new Vuex.Store({
	state: {
		user: {},
		blog: {
			latest: {},
			posts: []
		}
	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},
		resetState(state) {
			//clear the entire state object of user data
			state.user = {}
		},
		setPosts(state, posts) {
			state.blog.posts = posts
		},
		setLatestPost(state, latestPost) {
			state.blog.latest = latestPost
		}
	},
	actions: {

		// #region Auth

		async register({ commit, dispatch }, creds) {
			try {
				let user = await AuthService.Register(creds)
				commit('setUser', user)
				router.push({ name: "dashboard" })
			} catch (e) {
				console.warn(e.message)
			}
		},
		async login({ commit, dispatch }, creds) {
			try {
				let user = await AuthService.Login(creds)
				commit('setUser', user)
				router.push({ name: "dashboard" })
			} catch (e) {
				console.warn(e.message)
			}
		},
		async logout({ commit, dispatch }) {
			try {
				let success = await AuthService.Logout()
				if (!success) { }
				commit('resetState')
				router.push({ name: "login" })
			} catch (e) {
				console.warn(e.message)
			}
		},

		// #endregion
		// #region Blog Posts

		async getPosts({ commit, dispatch }) {
			console.log("Getting posts...")
			try {
				let res = await api.get('blog')
				commit('setPosts', res.data)
			} catch (error) { console.error(error) }
		},
		async getLatestPost({ commit, dispatch }) {
			console.log("Getting latest post...")
			try {
				let res = await api.get('blog/latest')
				commit('setLatestPost', res.data)
			} catch (error) { console.error(error) }
		}

		// #endregion

	},
	modules: {
	}
})
