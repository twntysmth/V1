<script setup>

    const props = defineProps({ blok: Object });

</script>

<template>

    <div class="intro-text">
        <div class="grid-wrap">

            <div class="intro-text__content w10 w-start-2 mw6 mw-start-4 lw8 lw-start-9">
                <h1 class="intro-text__content__headline">
                    {{ blok.headline }}
                </h1>

                <p class="intro-text__content__text">
                    {{ blok.text }}
                </p>
            </div>

        </div>
    </div>

</template>