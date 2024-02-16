<template>
    <div class="nav-bar">
        <div class="position">
            <i class="iconfont icon-position"></i>
            <p class="position__text">北京理工大学国防科技园2号楼10层</p>
            <i class="iconfont icon-msg"></i>
        </div>
        <div class="search-bar">
            <div class="search-bar__content">
                <i class="iconfont icon-search"></i>
                <input
                    class="search-bar__content__input"
                    type="text"
                    placeholder="山姆会员商店优惠商品"
                />
            </div>
        </div>
        <div class="banner">
            <img class="banner__img" :src="data.banner" />
        </div>
        <div class="classification">
            <div
                v-for="item in data.itemList"
                :key="item.id"
                class="classification__item"
            >
                <img class="classification__item__img" :src="item.img" />
                <p class="classification__item__text">{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
    // ${{}} 用于在模板中传递 JavaScript 表达式的一种方式
    banner: "http://www.dell-lee.com/imgs/vue3/banner.jpg",
    itemList: [
        {
            id: "01",
            img: "http://www.dell-lee.com/imgs/vue3/超市.png",
            text: "超市便利",
        },
        {
            id: "02",
            img: "http://www.dell-lee.com/imgs/vue3/菜市场.png",
            text: "菜市场",
        },
        {
            id: "03",
            img: "http://www.dell-lee.com/imgs/vue3/水果店.png",
            text: "水果店",
        },
        {
            id: "04",
            img: "http://www.dell-lee.com/imgs/vue3/鲜花.png",
            text: "鲜花绿植",
        },
        {
            id: "05",
            img: "http://www.dell-lee.com/imgs/vue3/医药健康.png",
            text: "医药健康",
        },
        {
            id: "06",
            img: "http://www.dell-lee.com/imgs/vue3/家居.png",
            text: "家居时尚",
        },
        {
            id: "07",
            img: "http://www.dell-lee.com/imgs/vue3/蛋糕.png",
            text: "烘培蛋糕",
        },
        {
            id: "08",
            img: "http://www.dell-lee.com/imgs/vue3/签到.png",
            text: "签到",
        },
        {
            id: "09",
            img: "http://www.dell-lee.com/imgs/vue3/大牌免运.png",
            text: "大牌免运",
        },
        {
            id: "10",
            img: "http://www.dell-lee.com/imgs/vue3/红包.png",
            text: "红包套餐",
        },
    ],
});
</script>

<style lang="scss" scoped>
@import "../../assets/style/viriables";
@import "../../assets/style/mixins";

.nav-bar {
    padding: 0 0.18rem;
    background-color: #fff;

    .position {
        display: flex;
        align-items: center;

        padding-top: 0.16rem;

        .iconfont {
            font-size: 0.2rem;
        }

        &__text {
            flex-grow: 1;
            margin-left: 0.1rem;
            font-size: 0.16rem;

            @include text-ellipsos;
        }
    }

    .search-bar {
        // position: fixed;
        // top: 0;
        // left: 0;
        // z-index: 1;
        // padding:0.16rem 0.18rem;
        // width: 100vw;
        // background-color: #3a6ff3;

        padding: 0.16rem 0;

        &__content {
            display: flex;
            align-items: center;

            border-radius: 0.16rem;
            padding: 0 0.16rem;
            height: 0.32rem;

            color: #b7b7b7;
            background-color: #f5f5f5;

            .iconfont {
                font-size: 0.2rem;
            }

            &__input {
                flex: 1;

                margin-left: 0.12rem;
                border: 0;
                padding: 0;
                height: 100%;

                font-size: 0.14rem;
                line-height: 0.16rem;

                background-color: transparent;

                outline: none;

                &::placeholder {
                    color: #b7b7b7;
                }
            }
        }
    }

    .banner {
        position: relative;

        // 使用百分比值来设置容器的高度，这个百分比值是根据容器的宽度计算得出的
        padding-bottom: 25.3926%; // 图片宽高比

        &__img {
            position: absolute;

            width: 100%;
            height: 100%;
        }
    }

    .classification {
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        padding-top: 0.16rem;

        &__item {
            margin-bottom: 0.16rem;

            font-size: 0.12rem;
            line-height: 0.18rem;
            text-align: center;

            &__img {
                width: 0.48rem;
            }
        }
    }
}
</style>
