<template>
	<div class="carousel-view">
		<transition-group name="carousel" class="my-carousel" tag="div">
			<div v-for="(slide, index) in slides" class="slide" :key="slide.id">
				<img class="slide__image" :src="slide.imgLink" />
			</div>
		</transition-group>
		<div class="carousel-controls">
			<button class="btn btn-secondary" @click="previous">prev</button>
			<button class="btn btn-secondary" @click="next">next</button>
		</div>
	</div>
</template>


<script>
export default {
	name: "carousel",

	components: {},
	props: {},

	data() {
		return {
			slides: [
				{
					imgLink: require("../assets/catA.jpg"),
					id: 1
				},
				{
					imgLink: require("../assets/catB.jpg"),
					id: 2
				},
				{
					imgLink: require("../assets/catC.jpg"),
					id: 3
				},
				{
					imgLink: require("../assets/catD.jpg"),
					id: 4
				},
				{
					imgLink: require("../assets/catE.jpg"),
					id: 5
				}
			]
		};
	},
	computed: {},
	methods: {
		next() {
			const first = this.slides.shift();
			this.slides = this.slides.concat(first);
		},
		previous() {
			const last = this.slides.pop();
			this.slides = [last].concat(this.slides);
		}
	}
};
</script>


<style scoped>
body,
html {
	margin: 0;
}
.carousel-view {
	max-height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.my-carousel {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25em;
	min-height: 25em;
	overflow: hidden;
}
.slide {
	transform: translateZ(0) scale(1, 1);
	height: 20em;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	transition: transform 0.3s ease-in-out;
	opacity: 1;
	margin: 0.5em;
	flex: 0 0 20em;
}
.slide:first-of-type {
	opacity: 0;
}
.slide:last-of-type {
	opacity: 0;
}
.slide__image {
	width: auto;
	height: 110%;
	display: flex;
}
.carousel-controls {
	margin: 0;
	margin-top: -40px;
}
.btn {
	margin: 0.5em;
}
</style>