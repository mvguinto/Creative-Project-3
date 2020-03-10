<template>
<div class="wrapper">
	<div class="products">
		<div class="product" v-for="recipe in recipes" :key="recipe.id">
			<div class="info">
				<router-link :to="{ name: 'Recipe', params: {recipeName: recipe.name }}">{{recipe.name}}</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'RecipesList',
	props: {
		recipes: Array
	},
}
</script>
