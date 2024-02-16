<template>
    <div class="container">
        <HomePageHeader />

        <HomePageContent />

        <HomePageTab />
    </div>
</template>

<script setup>
import HomePageHeader from "./HomePageHeader.vue";
import HomePageContent from "./HomePageContent.vue";
import HomePageTab from "./HomePageTab.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/style/viriables";
@import "../../assets/style/mixins";

.container {
    overflow-y: auto;

    padding-bottom: 0.8rem;
    height: 100vh;

    background-color: #f5f5f5;

    &::-webkit-scrollbar {
        width: 0;
    }
}
</style>
