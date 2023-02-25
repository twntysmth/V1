<template>
    <NuxtLink v-if="link && link.linktype == 'story' && link.cached_url" :to="'/'+(link.cached_url != 'home' ? link.cached_url  : '')"><slot /></NuxtLink>
    <a v-else-if="link && link.linktype == 'url' && link.url" :href="link.url" target="_blank"><slot /></a>
    <a v-else-if="link && link.linktype == 'asset' && link.url" :href="link.url" target="_blank"><slot /></a>
</template>

<script setup>
    defineProps({ link: Object })
</script>