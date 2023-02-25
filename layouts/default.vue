<script setup>
    useJsonld({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Storyblok Template"
    });
</script>

<template>

    <SiteHeader/>

    <main class="site-main">
        <slot/>
    </main>

    <SiteFooter/>

</template>