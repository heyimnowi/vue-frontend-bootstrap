<template lang="pug">
v-app(:theme='theme')
	v-btn.toggle-theme-button(@click='toggleTheme')
		| toggle theme
	v-container
		v-col(align='center')
			img.my-3(:src='logo' alt='logo')
			HelloWorld
			router-view
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import logo from './assets/main.svg';
import { ref } from 'vue'

export default {
	name: 'App',

	components: {
		HelloWorld,
	},

	setup () {
		const theme = ref('light')

		return {
			theme,
			toggleTheme: () => theme.value = theme.value === 'light' ? 'dark' : 'light'
		}
	},

	data: () => ({
		logo: logo
	}),
};
</script>

<style lang="scss" scoped>
.v-container {
	max-width: 700px;
	min-height: 100vh;
}

.toggle-theme-button {
	position: absolute;
	top: 10px;
	right: 10px;
}

img {
	width: 300px;
	margin: 0 auto;
}
</style>
