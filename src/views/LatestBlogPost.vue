<template>
	<div class="latest-blog-post">
		<post />
	</div>
</template>


<script>
import Post from "../components/Post.vue";

export default {
	name: "latest-blog-post",

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