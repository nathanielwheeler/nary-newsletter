<template>
	<div class="home">
		<div class="jumbotron jumbotron-fluid">
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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Carousel from "../components/Carousel.vue";

export default {
	name: "home",

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
</style>
