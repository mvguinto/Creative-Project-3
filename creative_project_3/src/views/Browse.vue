<template>
<div>
	<div class="pure-menu pure-menu-horizontal">
		<ul class="pure-menu-list">
			<li class="pure-menu-item"><a @click="select('Name')" href="#" class="pure-menu-link">Name</a></li>
			<li class="pure-menu-item"><a @click="select('Ingredient')" href="#" class="pure-menu-link">Ingredient</a></li>
		</ul>
	</div>
	<form class="pure-form">
		<i class="fas fa-search"></i><input v-model="searchText" />
	</form>
	<RecipesList :recipes="recipes" />
</div>
</template>

<script>
import RecipesList from "../components/RecipesList.vue"
export default {
	name: 'Browse',
	components: {
		RecipesList
	},
	data() {
		return {
			filter: '',
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
		}
	},
	methods: {
		select(filter) {
			this.filter = filter;
		}
	}
}
</script>
