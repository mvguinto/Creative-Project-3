<template>
<div class="home">
	<img alt="Chef logo" src="/images/Little-Chef.jpg" class="logo">
	<h1>Welcome to "Hello World"!</h1>
	<p>Click on browse to search for recipes by name or ingredient.</p>
	<p>Click on random to view one random recipe.</p>
</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>

<style>
.logo {
	width: 100%;
}

@media only screen and (min-width: 961px) {
	.logo {
		width: 65%;
	}
}
</style>
