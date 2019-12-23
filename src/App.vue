<template>
	<div id="app">
		<navigation />
		<router-view />
	</div>
</template>


<script>
import Navigation from "./components/Navigation.vue";

export default {
	name: "app",

	components: { Navigation },
	props: {},

	data() {
		return {};
	},
	computed: {},
	methods: {}
};
</script>


<style>
* {
	border-radius: 0 !important;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
