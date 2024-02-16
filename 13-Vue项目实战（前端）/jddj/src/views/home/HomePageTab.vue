<template>
    <div class="tab-bar">
        <div
            v-for="(item, index) in data.tablist"
            v-bind:key="item.icon"
            :class="{ 'tab-bar__item--active': data.checked === index }"
            class="tab-bar__item"
        >
            <i class="iconfont" :class="item.icon"></i>
            <span class="tab-bar__text">{{ item.text }}</span>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
    checked: 0,
    tablist: [
        { icon: "icon-home", text: "首页" },
        { icon: "icon-gouwuche", text: "购物车" },
        { icon: "icon-order", text: "订单" },
        { icon: "icon-my", text: "我的" },
    ],
});
</script>

<style lang="scss" scoped>
@import "../../assets/style/viriables";
@import "../../assets/style/mixins";

.tab-bar {
    display: flex;

    position: fixed;
    left: 0;
    bottom: 0;

    width: 100vw;
    height: 0.49rem;

    background-color: #fff;

    box-shadow: 0 -1px 1px 0 #f1f1f1;

    &__item {
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .iconfont {
            font-size: 0.2rem;
        }

        &--active {
            color: #1fa4fc;
        }
    }

    &__text {
        font-size: 0.12rem;
    }
}
</style>
