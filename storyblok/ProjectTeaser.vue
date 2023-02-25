<script setup>

    const props = defineProps({ blok: Object });

</script>

<template>

    <div class="project-teaser">
        <div class="grid-wrap">

            <div class="project-teaser__content w12 mw10 mw-start-2 lw22 lw-start-2 xxlw-start-8">
                <strong class="project-teaser__content__subline">
                    {{ blok.subline }}
                </strong>

                <h2 class="project-teaser__content__headline">
                    {{ blok.headline }}
                </h2>

                <UniversalLink class="button" :link="blok.link">
                    {{ blok.linktext }}
                </UniversalLink>
            </div>

            <ul class="project-teaser__list w12 lw24 xxlw-start-7">
                <li v-for="(item, index) in blok.items" :key="index">
                    <UniversalLink :link="item.link">
                        <article>
                            <h3>
                                {{ item.title }}
                            </h3>

                            <p>
                                {{ item.description }}
                            </p>
                        </article>
                    </UniversalLink>
                </li>
            </ul>
            
        </div>
    </div>

</template>