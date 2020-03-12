<template>
<div class="home">
	<img alt="Vue logo" src="../assets/logo.png">
	<h1>{{recipe.id}}</h1>
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
