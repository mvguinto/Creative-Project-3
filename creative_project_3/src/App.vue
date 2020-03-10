<template>
<div id="app">
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/Browse">Browse</router-link> |
		<router-link :to="{ name: 'Recipe', params: {recipeName: 'random' }}">Random</router-link>
	</div>
	<router-view />
</div>
</template>

<style>
body {
	background: #80808C;
}

#app {
	font-family: 'Indie Flower', cursive;
	font-size: 25px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin: 40px;
	padding: 20px 25%;
	background: #FFFFFF;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
