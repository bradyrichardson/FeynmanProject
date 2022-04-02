<template>
<div id="app">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link class="navbar-brand" to="/">Feynman</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<router-link class="nav-item nav-link" to="/">Home</router-link>
				<router-link class="nav-item nav-link" to="/browse">Browse</router-link>
				<router-link class="nav-item nav-link" v-if="user == null" to="/login">Login</router-link>
				<router-link class="nav-item nav-link" v-if="user == null" to="/register">Register</router-link>
				<router-link class="nav-item nav-link" v-if="user != null" to="/login" @click.native="logout()">Logout</router-link>
			</div>
		</div>
	</nav>
	<router-view />
	<footer>
		<a href="https://github.com/bradyrichardson/FeynmanProject">Github Repo</a>
		<p>I worked with Josh Richardson</p>
	</footer>
</div>
</template>

<script>
import axios from 'axios';

export default {
	name: "App",
	async created() {
		// Check to see if a cookie is storing the logged in user.
		// If it is, set that user as the logged in user.
		// This makes it so the user won't be logged out when they refresh the page or something.
		try {
			let response = await axios.get('/api/users');
			this.$root.$data.user = response.data.user;
		} catch (error) {
			this.$root.$data.user = null;
		}
	},
	computed: {
		user() {
			return this.$root.$data.user;
		}
	},
	methods: {
		async logout() {
			try {
				await axios.delete("/api/users");
				this.$root.$data.user = null;
			} catch (error) {
				this.$root.$data.user = null;
			}
		},
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.bg-light {
	background-color: #BAF2E9 !important;
}

footer {
	width: 100%;
	height: 60px;
	background-color: #DDF8F4;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
