<template>
	<div class="blog-post">
		<post />
	</div>
</template>


<script>
import Post from "../components/Post.vue";

export default {
	name: "blog-post",

	components: { Post },
	props: {},

	data() {
		return {};
	},
	computed: {},
	methods: {}
};
</script>


<style scoped>
</style>