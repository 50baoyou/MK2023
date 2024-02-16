import { createStore } from 'vuex';

// Vuex 是一个状态管理库
// 它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
// 插件了一个全局唯一的仓库，用来存放全局的数据。
export default createStore({
    // 存放要被管理的数据
    state: {
        name: 'xk', // 不可以直接在组件中修改全局数据
    },
    // 类似于 computed 计算属性
    getters: {},
    // 定义要修改 state 中数据的方法
    // mutation 里面只允许写同步代码，不允许写异步代码
    mutations: {
        // 第四步，对应的 mutation 被执行
        change() {
            // 第五步，在mutation 里面修改数据
            this.state.name = '347443';
        },
    },
    // 存放异步操作
    actions: {
        // 第二步，store 感知到派发出的叫 change 的 action，并执行
        change() {
            // 第三步，提交一个 commit 触发一个mutation
            this.commit('change');
        },
    },
    // 可以将多个 store 分成一个一个的模块
    modules: {},
});
