<template>
<div class="home">
	<img :src="'/images/recipes/' + recipe.image">
</div>
</template>

<script>
export default {
	name: 'Home',
	props: {
		recipeName: String
	},
	data() {
		if (this.recipeName === "random") {
			return {
				recipe: this.$root.$data.recipes[Math.floor(Math.random() * this.$root.$data.recipes.length)]
			}
		} else
			return {
				recipe: this.$root.$data.recipes.find(recipe => recipe.name === this.recipeName)
			}
	},
}
</script>
