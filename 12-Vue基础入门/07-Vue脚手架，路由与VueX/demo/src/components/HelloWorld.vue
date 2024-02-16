<!-- 单文件组件 -->
<template>
    <div>{{ msg }}</div>
    <div>
        <input v-model="inputValue" />
        <button class="btn" @click="handleClick">提交</button>
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup>
    import { defineProps, ref, reactive } from 'vue';

    // Props 声明
    defineProps({
        msg: String,
    });

    const inputValue = ref('');
    const list = reactive([]);

    const handleClick = () => {
        if (inputValue.value) {
            list.push(inputValue.value);
            inputValue.value = '';
        }
    };
</script>

<!-- scoped 表示样式仅使用当前组件 -->
<style scoped>
    .btn {
        margin-left: 10px;
    }
</style>
