<template>
    <Head>
        <Title>Программа тренировок {{ training.title }} - Fitbody</Title>
        <Meta name="description" :content="training.description"/>
    </Head>
    <div class="">
        <transition name="form">
            <main v-if="!isPurchased" class="page">
                <section class="promo page__promo py-3 py-md-5">
                    <div class="container py-3">
                        <div class="promo__wrapper row align-items-center">
                            <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                                <img :src="training.image || '/_nuxt/assets/img/services/page_img.jpg' " alt="">
                            </div>
                            <div class="col-lg-7 col-xl-7">
                                <button @click="$router.go(-1)" class="page-nav">
                                    <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                                    </svg>
                                    Назад
                                </button>
                                <h1>{{ training.title }}</h1>
                                <div v-html="training.description" class="promo__text"></div>
                                <purchase-button :price="training.price" service="trainings"
                                                 class="btn btn-primary button"/>
                            </div>

                        </div>
                    </div>
                </section>

                <div class="container">
                    <section class="page__desc">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <h2>О ПРОГРАММЕ</h2>
                                <div v-html="training.about_program"></div>

                                <purchase-button :price="training.price" service="trainings"
                                                 class="btn btn-primary button"/>
                            </div>
                        </div>
                    </section>

                    <section class="others">
                        <h3 class="others__header">С этой программой также покупают</h3>
                        <div class="py-4">
                            <h2 class="text-center mb-md-4">Питание</h2>
                            <div class="row justify-content-center">
                                <div v-for="nutrition in filterByGender(nutrions).splice(0, 2)" class="col-6 col-md-4">
                                    <!-- service-item -->
                                    <nuxt-link :to="'/nutritions/' + nutrition._id" class="service">
                                        <img class="img-fluid" :src="nutrition.image" alt="">
                                        <div class="service__wrapper">

                                            <h3 class="service__title">{{ nutrition.title }}</h3>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="15" fill="#F52626"/>
                                                <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                                      stroke-linejoin="round"/>
                                            </svg>

                                        </div>
                                    </nuxt-link>
                                    <!-- end service-item -->
                                </div>
                            </div>
                        </div>

                        <div class="py-4">
                            <h2 class="text-center mb-md-4">Курсы</h2>
                            <div class="row justify-content-center">
                                <div v-for="course in filterByGender(courses).splice(0, 2)" class="col-6 col-md-4">
                                    <!-- service-item -->
                                    <nuxt-link :to="'/courses/' + course._id" class="service">
                                        <img class="img-fluid" :src="course.image" alt="">
                                        <div class="service__wrapper">

                                            <div>
                                                <h3 class="service__title">{{ course.title }}</h3>
                                                <div class="service__desc">{{ course.short_description }}</div>
                                            </div>
                                            <svg class="align-self-end" width="30" height="30" viewBox="0 0 30 30"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="15" r="15" fill="#F52626"/>
                                                <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                                      stroke-linejoin="round"/>
                                            </svg>

                                        </div>
                                    </nuxt-link>
                                    <!-- end service-item -->
                                </div>
                            </div>

                            <nuxt-link to="/courses" class="btn btn-link btn-more">
                                Посмотреть все курсы
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" transform="rotate(90 8 8)" fill="#F52626"/>
                                    <path d="M11 7L8 10L5 7" stroke="white" stroke-width="0.933333"
                                          stroke-linejoin="round"/>
                                </svg>
                            </nuxt-link>
                        </div>
                    </section>
                </div>
            </main>
        </transition>
        <transition name="form">
            <div v-if="isPurchased">
                <training-index service="trainings"/>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">

import TrainingIndex from "~/components/TrainingIndex.vue";
import checkPurchased from "~/utils/checkPurchased";

const route: any = useRoute().params.slug;

const res = await useService('trainings').get(route);

const training = ref(res.data);

const nutrions = ref(await getNutrions(training.value.type, 2));
const courses = ref(await getCourses(training.value.type, 2));

const isPurchased: Ref<boolean | undefined> = ref(false);

onMounted(async () => {
    isPurchased.value = await checkPurchased(route);
});

function filterByGender(arr: any) {
    return arr.filter((el: any) => el._id !== training.value._id);
}

</script>

<style>

</style>