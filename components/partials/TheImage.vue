<script setup>

	const props = defineProps({
		loading: {
			type: [String],
		},
		src: {
			type: [String]
		},
		sizes: {
			type: [String]
		},
		static: {
			type: [Boolean]
		},
	})

</script>

<template>
	<NuxtImg :provider="props.static ? '' : 'storyblok'" :src="props.src"  :sizes="props.sizes" :loading="props.loading" />
</template>


