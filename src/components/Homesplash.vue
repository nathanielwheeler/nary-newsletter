<template>
	<div class="homesplash">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-12 col-md-6 order-1 order-md-2">
					<carousel />
				</div>
				<div class="col-12 col-md-6 order-2 order-md-1">
					<h3 class="display-4">Header</h3>
					<p
						class="lead"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut voluptatibus aliquam accusamus minima deleniti, sed error a velit vero doloribus quis laudantium recusandae odit voluptatum nulla natus facere? Natus.</p>
					<router-link class="btn btn-primary" to="/blog/latest">Read more...</router-link>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Carousel from "./Carousel.vue";

export default {
	name: "homesplash",

	components: { Carousel },
	props: {},

	data() {
		return {};
	},
	computed: {},
	methods: {}
};
</script>


<style scoped>
.homesplash {
	background: #d5c4a1;
}
</style>