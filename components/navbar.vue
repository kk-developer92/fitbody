<template>
    <nav id="main-navbar" class="navbar pt-2">
        <div class="container">
            <div class="d-flex w-100 align-items-center p-2">
                <div class="header-reg" v-if="user?.name">
                    <!--                    <logout class="cursor-pointer"/>-->
                    <nuxt-link class="account" to="/">
                        <home-icon/>
                        <span>Главная</span>
                    </nuxt-link>
                    <nuxt-link class="account" to="/courses">
                        <courses-icon/>
                        <span>Курсы</span>
                    </nuxt-link>
                    <nuxt-link class="account" to="/trainings">
                        <training-icon/>
                        <span>Тренировки</span>
                    </nuxt-link>
                    <nuxt-link class="account" to="/nutritions">
                        <nutrition-icon/>
                        <span>Питание</span>
                    </nuxt-link>
                    <nuxt-link class="account" to="/account">
                        <account-icon/>
                        <span>КАБИНЕТ</span>
                    </nuxt-link>
                </div>
                <div class="header-reg" v-else>
                    <nuxt-link to="/login">Войти</nuxt-link>
                    <nuxt-link to="/signup">Регистрироваться</nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

import {parseJwt} from "~/utils/auth";
import AccountIcon from "~/components/icons/AccountIcon.vue";
import NutritionIcon from "~/components/icons/NutritionIcon.vue";
import TrainingIcon from "~/components/icons/TrainingIcon.vue";
import CoursesIcon from "~/components/icons/CoursesIcon.vue";
import HomeIcon from "~/components/icons/HomeIcon.vue";

const cookie: any = useCookie('token');

const user: any = ref({});

if (cookie.value) {
    const token = parseJwt(cookie.value);

    let res: any = {};

    try {
        res = await useService('users').get(token.sub);
    } catch (e) {
        useCookie('token').value = '';
    }
    user.value = res.data;
}


</script>

<style scoped lang="scss">
#main-navbar {
    display: flex;
    align-items: center;
    justify-content: left;
    background: #3C4555;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    @media (max-width: 450px) {
        width: 100%;
        position: fixed;
        bottom: 0;
        border-radius: 10px 10px 0 0;
        z-index: 1000;
    }
}

a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;

    @media (max-width: 900px) {
        flex-direction: column;
    }

    @media (max-width: 450px) {
        span {
            font-size: 12px !important;
        }
    }
}

.header-reg {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

</style>