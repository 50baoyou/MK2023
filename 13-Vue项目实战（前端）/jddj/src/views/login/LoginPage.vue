<template>
    <div class="container">
        <div class="login">
            <div class="login__img">
                <img src="http://www.dell-lee.com/imgs/vue3/user.png" />
            </div>
            <div class="login__content">
                <input
                    class="login__content__user"
                    type="text"
                    placeholder="请输入手机号"
                    maxlength="11"
                />
                <input
                    class="login__content__pwd"
                    type="password"
                    placeholder="请输入密码"
                    maxlength="20"
                />
                <div class="login__content__button">登录</div>
            </div>
            <div class="login__option">
                <div class="login__option__register">立即注册</div>
                <span class="login__option__split-line">|</span>
                <div class="login__option__retrieve">忘记密码</div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
    background-color: #fff;

    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100vh;

        &__img {
            width: 0.66rem;
            height: 0.66rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &__content {
            margin-top: 0.4rem;
            padding: 0 0.4rem;
            width: 100%;

            &__user,
            &__pwd {
                display: block;

                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 0.06rem;
                padding: 0.12rem 0.16rem;
                width: 100%;
                height: 0.4rem;

                font-size: 0.16rem;
                line-height: 0.24rem;

                background: #f9f9f9;

                &::placeholder {
                    color: rgba(0, 0, 0, 0.5);
                }
            }

            &__pwd {
                margin-top: 0.16rem;
            }

            &__button {
                display: flex;
                justify-content: center;
                align-items: center;

                margin-top: 0.32rem;
                border-radius: 0.06rem;
                width: 100%;
                height: 0.48rem;

                color: #fff;

                background-color: #0091ff;

                box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
            }
        }

        &__option {
            display: flex;

            margin-top: 0.16rem;

            font-size: 0.14rem;
            line-height: 0.2rem;

            color: rgba(0, 0, 0, 0.5);

            &__split-line {
                margin: 0 0.12rem;
            }
        }
    }
}
</style>
