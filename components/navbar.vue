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
                    <div class="header-reg" v-if="user.name">
                        <client-only>
                            <logout class="cursor-pointer"/>
                        </client-only>
                        <nuxt-link class="account" to="/account">
                            <span class="name">{{ user.name }}</span>
                            <img class="placeholder"
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

import axios from "axios";
import Logout from "~/components/icons/logout.vue";

const cookie: any = useCookie('token');
const url = import.meta.env.VITE_API_URL;

const user: any = ref({});

async function fetchUser() {
    if (cookie.value) {
        const token: any = parseJwt(cookie.value);
        try {
            const usr = await axios.get(url + '/users/' + token._id);
            user.value = usr.data;
        } catch (e) {
            user.value = {};
        }
    }
}

fetchUser();

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

.placeholder {
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