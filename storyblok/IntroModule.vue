<script setup>

    const props = defineProps({ blok: Object });

</script>

<template>

    <div class="intro-module">
        <div class="grid-wrap">

            <div class="intro-module__image w12 mw6 lw10 lw-start-2">
                <figure>
					<StoryPicture :src="blok.image.filename" :alt="blok.image.alt" s0="450" s480="738" s768="478" s1024="746" sNone="746" loading="lazy" />
				</figure>
            </div>

            <div class="intro-module__content w12 mw6 lw10 lw-start-14">
                <strong class="intro-module__content__subline">
                    {{ blok.subline }}
                </strong>

                <h1 class="intro-module__content__headline">
                    {{ blok.headline }}
                </h1>

                <p class="intro-module__content__text">
                    {{ blok.text }}
                </p>

                <UniversalLink class="button" :link="blok.link">
                    {{ blok.linktext }}
                </UniversalLink>
            </div>

        </div>
    </div>

</template>