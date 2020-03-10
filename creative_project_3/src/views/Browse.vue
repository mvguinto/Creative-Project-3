<template>
<div>
	<div class="menu">
		<p>Search By:</p>
		<a @click="select('Name')" href="#" v-bind:class="{active: nameIsActive}">Name</a> |
		<a @click="select('Ingredient')" href="#" v-bind:class="{active: !nameIsActive}">Ingredient</a>
		<form class="pure-form">
			<i class="fas fa-search"></i><input v-model="searchText" />
		</form>
	</div>
	<div class="recipe" v-for="recipe in recipes" :key="recipe.id">
		<div class="info">
			<router-link :to="{ name: 'Recipe', params: {recipeName: recipe.name }}">{{recipe.name}}</router-link>
			<img :src="'/images/recipes/' + recipe.image">
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Browse',
	data() {
		return {
			filter: 'Name',
			searchText: ''
		}
	},
	computed: {
		recipes() {
			if (this.searchText === '') return null;
			if (this.filter === 'Name') {
				return this.$root.$data.recipes.filter(recipe => recipe.name.toLowerCase()
					.search(this.searchText.toLowerCase()) >= 0);
			} else if (this.filter == 'Ingredient') {
				return this.$root.$data.recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.toLowerCase()
					.search(this.searchText.toLowerCase()) >= 0));
			} else {
				return null
			}
		},
		nameIsActive() {
			return this.filter === "Name"
		},
	},
	methods: {
		select(filter) {
			this.filter = filter;
		}
	}
}
</script>

<style>
.menu p {
	margin: 0px;
}

a {
	color: #aab1bf;
}

.active {
	color: #555c73;
}

.recipe a {
	color: #000000
}
</style>
