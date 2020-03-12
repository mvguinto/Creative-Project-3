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
	background: #321e17;
}

#app {
	font-family: 'Indie Flower', cursive;
	font-size: 25px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	margin: 5%;
	padding: 5% 15%;
	background: #FFFFFF;
}

#nav {
	padding: 7.5%;
	margin-bottom: 10%;
	background: #FFFFFF url("/images/Rolling-Pin.jpg") no-repeat center;
	background-size: 100%;
}

#nav a {
	font-weight: bold;
	color: #f2ebc9;
}

#nav a.router-link-exact-active {
	color: #321e17;
}
</style>
