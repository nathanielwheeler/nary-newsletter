<template>
	<div class="post container">
		<div class="row">
			<h3 class="col-12">{{post.title}}</h3>
			<img class="col-12" :src="post.bannerImg" :alt="post.bannerImgText" />
			<p class="col-12">{{post.body}}</p>
		</div>
	</div>
</template>


<script>
export default {
	name: "post",

	components: {},
	props: {},

	data() {
		return {
			post: {
				title: "Latest Blog Title",
				bannerImg: "http://placehold.it/800x200",
				bannerImgText: "Nothing",
				body:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut voluptatibus aliquam accusamus minima deleniti, sed error a velit vero doloribus quis laudantium recusandae odit voluptatum nulla natus facere? Natus."
			}
		};
	},
	computed: {},
	methods: {}
};
</script>


<style scoped>
</style>