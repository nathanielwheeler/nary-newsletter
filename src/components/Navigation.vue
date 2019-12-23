<template>
	<div class="navigation">
		<router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
	</div>
</template>


<script>
export default {
	name: "navigation",

	components: {},
	props: {},

	data() {
		return {
			links: [
				{
					id: 0,
					text: "Home",
					page: "/"
				},
				{
					id: 1,
					text: "About",
					page: "/about"
				}
			]
		};
	},
	computed: {},
	methods: {}
};
</script>


<style scoped>
.navigation {
	padding: 30px;
}

.navigation a {
	font-weight: bold;
	color: #2c3e50;
	margin-right: 10px;
}

.navigation a.router-link-exact-active {
	color: #42b983;
}
</style>