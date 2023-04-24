<template lang="pug">
v-card(align='start')
	v-card-title
		| Home view
	v-card-text
		| {{ counterStore.count }} Clicks
	v-card-actions
		my-button(label='UI Library' color='secondary')
		v-btn(color='secondary' @click='onClick')
			|  Click me!
</template>

<script lang="ts">
import { useCounterStore } from '@/stores/counter';
import MyButton from 'vue-ui-library';

export default {
	name: 'HomeView',

	components: {
		MyButton
	},

	setup() {
		const counterStore = useCounterStore();
		return { counterStore };
	},

	methods: {
		onClick: function () {
			this.counterStore.increment();
		},
	},
};
</script>

<style lang="scss" scoped>
.v-card {
	background: var(--v-theme-mine-shaft);
	color: var(--v-theme-gallery);
}

</style>
