<script setup>

    const props = defineProps({ blok: Object });
    const richtext = computed(() => renderRichText(props.blok.richtext));

</script>

<template>

    <div class="content-text">
        <div class="grid-wrap">

            <div class="content-text__content w12 mw6 mw-start-4 lw10 lw-start-8">
                <strong class="content-text__content__subline">
                    {{ blok.subline }}
                </strong>

                <h2 class="content-text__content__headline">
                    {{ blok.headline }}
                </h2>

                <div class="content-text__content__text" v-html="richtext"></div>
            </div>

        </div>
    </div>

</template>