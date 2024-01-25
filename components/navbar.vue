<template>
    <nav id="main-navbar" class="navbar pt-2">
        <div class="container-fluid flex">
            <div id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" href="/">Главная</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="d-flex align-items-center p-2">
                <div class="">
                    <div class="header-reg" v-if="user?.name">
                        <client-only>
                            <logout class="cursor-pointer"/>
                        </client-only>
                        <nuxt-link class="account" to="/account">
                            <span class="name">{{ user.name }}</span>
                            <img class="placeholder_account"
                                 src="https://avatars.mds.yandex.net/i?id=1263002c81e51f3c256d8cafee645c0e0fd34fc1-10803272-images-thumbs&n=13"
                                 alt="">
                        </nuxt-link>
                    </div>
                    <div class="header-reg" v-else>
                        <nuxt-link to="/login">Войти</nuxt-link>
                        <nuxt-link to="/signup">Регистрироваться</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

import Logout from "~/components/icons/logout.vue";
import {parseJwt} from "~/utils/auth";

const cookie: any = useCookie('token');

const user: any = ref({});

if (cookie.value) {
    const token = parseJwt(cookie.value);

    let res: any = {};

    try {
        res = await useService('users').get(token.sub);
    } catch (e) {
        console.log(e);
    }
    user.value = res.data;
}
</script>

<style scoped>
.header-reg {
    display: flex;
    gap: 20px;
    align-items: center;
}

a {
    color: white;
    text-decoration: none;
}

.placeholder_account {
    border-radius: 100%;
    width: 40px;
}

.account {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cursor-pointer {
    width: 20px;
}

.navbar {
    width: 77%;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: 100%;
    }
}

.name {
    @media (max-width: 600px) {
        display: none;
    }
}
</style>