<template>
    <div class="about">
        {{ getName }}
        <button @click="handleClick">点击</button>
        <h1>This is an about page</h1>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const url = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd';

    const store = useStore();

    const getName = computed(() => {
        return store.state.name;
    });

    const handleClick = () => {
        // 想改变数据，第一步必需派发一个 action
        store.dispatch('change');
    };
</script>
