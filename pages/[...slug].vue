<script setup>

    const { STORY_ENVIRONMENT } = useRuntimeConfig()
    const { slug } = useRoute().params

    let realSlug = slug
    if (Array.isArray(slug)){
        realSlug = slug.join('/')
    }
        
    let story = null
    try {
        story = await useStoryblok(realSlug ? realSlug : 'home', {
        version: STORY_ENVIRONMENT,
        })
    } catch(e){
        throw createError({ fatal: true, statusCode: 404, statusMessage: 'Page Not Found' })
    }

</script>

<template>

    <StoryblokComponent v-if="story" :blok="story.content" />

</template>
