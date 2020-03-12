<template>
<div id="app">
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/Browse">Browse</router-link> |
		<router-link :to="{ name: 'Recipe', params: {recipeName: 'random' }}">Random</router-link>
	</div>
	<div class="content-wrapper">
		<router-view />
	</div>
</div>
</template>

<style>
body {
	background: #321e17;
	padding: 5%;
}

#app {
	font-family: 'Indie Flower', cursive;
	font-size: 15px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background: #FFFFFF;
}

.content-wrapper {
	margin: 5%;
	padding: 0% 15% 10% 15%;
}

#nav {
	padding: 10% 7.5%;
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

@media only screen and (min-width: 961px) {
	#app {
		font-size: 25px;
	}

	#nav {
		background-size: 75%
	}

	.content-wrapper {
		margin: 0%;
		padding: 0% 15% 10% 15%;
	}
}
</style>
