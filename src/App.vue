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
}

/* custom button styling */
.btn-primary {
	/* background: #746eb1; */
	background: #b16e6e;
	border: 0;
}
.btn-primary:hover {
	/* background: #5b54af; */
	background: #af5454;
}
.btn-secondary {
	background: #838c96;
	border: 0;
}
.btn-secondary:hover {
	background: #6a7179;
}
</style>
