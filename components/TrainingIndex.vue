<template>
    <main class="page">
        <section class="promo page__promo py-3 py-md-5">
            <div class="container py-3">
                <div class="promo__wrapper row align-items-center">
                    <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                        <img :src="training?.image"
                             alt="">
                    </div>
                    <div class="promo__text col-lg-7 col-xl-7">
                        <button @click="navigateTo('/account')" class="page-nav">
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                            </svg>
                            Личный кабинет
                        </button>
                        <h1>{{ training?.title }}</h1>
                        <div v-html="training?.description" class="promo__text">
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <div class="container">
            <section class="page__desc">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class="py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row justify-content-center">
                                    <div class="col-md-10">
                                        <div class="list-group list-group-flush">
                                            <training-weeks v-for="week in training?.exercises" :data="week"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>


<script lang="ts" setup>

import axios from "axios";

const props = defineProps<{ path: string }>()
const route = useRoute().params.slug;
const cookie = useCookie('token');
const training = ref();

if (cookie.value) {
    const token: any = parseJwt(cookie.value);
    const user = await axios.get(`${import.meta.env.VITE_API_URL}/users/${token._id}`);

    for (let i of user.data[props.path]) {
        if (i._id.toString() === route) {
            training.value = i;
        }
    }
}

</script>