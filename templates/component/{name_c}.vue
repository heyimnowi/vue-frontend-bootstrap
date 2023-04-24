<template lang="pug">
div
  h1
    | {{ name_c }} is working!
</template>

<script lang="ts">
export default {
	data: () => ({
		name_c: 'Component is working'
	})
}
</script>

<style lang="scss" scoped></style>
