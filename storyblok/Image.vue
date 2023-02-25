<script setup>

    const props = defineProps({ blok: Object });

</script>

<template>

    <div class="image">
        <div class="grid-wrap">

            <div class="w12 mw10 mw-start-2 lw20 lw-start-3">
                <StoryPicture :src="blok.image.filename" :alt="blok.image.alt" s0="450" s480="460" s768="620" s1024="832" s1280="1030" s1440="1170" sNone="1170" loading="lazy" />
            </div>

        </div>
    </div>

</template>