<template lang="pug">
.mb-5.mt-5
	v-card(align='start')
		v-card-title
			| {{ t('hello') }} 👋
		v-card-subtitle
			| {{ welcome }}
		v-card-text
			| Mode: {{ name }}
		v-card-actions
			v-btn(v-for='(link, i) in links' key='i' :href='link.href' color='primary')
				| {{ link.text }}
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';

export default {
	name: 'HelloWorld',

	setup() {
		const { t } = useI18n();
		return { t };
	},

	data: () => ({
		name: import.meta.env.VITE_APP_TITLE,
		welcome: 'Welcome to my Vue 3 project',
		links: [
			{
				text: 'Home',
				href: '/',
			},
			{
				text: 'About',
				href: '/about',
			},
		],
	}),
	methods: {},
};
</script>
