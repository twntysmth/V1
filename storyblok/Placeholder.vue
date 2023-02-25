<script setup>

    const props = defineProps({ blok: Object });

</script>

<template>

    <div class="placeholder" :style="getModuleBackground(blok)">
        <div class="grid-wrap">

        </div>
    </div>

</template>

<style lang="scss" scoped>
.placeholder {
    height: 80vh;
}

</style>