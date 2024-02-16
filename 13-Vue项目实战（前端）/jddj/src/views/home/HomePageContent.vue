<template>
    <div class="content">
        <div class="content__title">附近店铺</div>
        <div class="content__list">
            <div class="shop-list">
                <div
                    v-for="item in data.shoplist"
                    :key="item.id"
                    class="shop-list__item"
                >
                    <div class="shop-list__item__img">
                        <img :src="item.img" />
                    </div>
                    <div class="shop-list__item__content">
                        <div class="title">{{ item.title }}</div>
                        <div class="info">
                            <div class="sales">月售{{ item.sales }}</div>
                            <div class="min-price">
                                起送￥{{ item.minPrice }}
                            </div>
                            <div class="freight">
                                基础运费￥{{ item.freight }}
                            </div>
                        </div>
                        <div class="highlight">
                            {{ item.highlight }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
    shoplist: [
        {
            id: "01",
            img: "http://www.dell-lee.com/imgs/vue3/near.png",
            title: "沃尔玛",
            sales: "1万+",
            minPrice: "0",
            freight: "5",
            highlight: "VIP尊享满89元减4元运费券（每月3张）",
        },
        {
            id: "02",
            img: "http://www.dell-lee.com/imgs/vue3/near.png",
            title: "沃尔玛",
            sales: "1万+",
            minPrice: "0",
            freight: "5",
            highlight: "VIP尊享满89元减4元运费券（每月3张）",
        },
        {
            id: "03",
            img: "http://www.dell-lee.com/imgs/vue3/near.png",
            title: "沃尔玛",
            sales: "1万+",
            minPrice: "0",
            freight: "5",
            highlight: "VIP尊享满89元减4元运费券（每月3张）",
        },
    ],
});
</script>

<style lang="scss" scoped>
@import "../../assets/style/viriables";
@import "../../assets/style/mixins";

.content {
    margin-top: 0.1rem;
    padding: 0.16rem 0;

    background-color: #fff;

    &__title {
        padding: 0 0.18rem;

        font-size: 0.18rem;
        line-height: 0.25rem;
    }

    &__list {
        margin-top: 0.02rem;
    }

    .shop-list {
        &__item {
            display: flex;
            padding: 0.12rem 0.18rem;

            &__img {
                width: 0.56rem;
                height: 0.56rem;

                img {
                    width: 100%;
                }
            }

            &__content {
                flex: 1;

                margin-left: 0.16rem;
                border-bottom: 1px solid #f1f1f1;

                font-size: 0.13rem;
                line-height: 0.18rem;

                .title {
                    font-size: 0.16rem;
                    line-height: 0.22rem;
                }

                .info {
                    display: flex;
                    margin-top: 0.08rem;

                    .sales,
                    .min-price {
                        margin-right: 0.16rem;
                    }
                }

                .highlight {
                    margin-top: 0.08rem;
                    padding-bottom: 0.12rem;

                    color: #e93b3b;
                }
            }
        }
    }
}
</style>
