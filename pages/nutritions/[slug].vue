<template>
    <Head>
        <Title>Программа питание {{ current_nutrion.title }} - Fitbody</Title>
        <Meta name="description" :content="current_nutrion.description" />
    </Head>
    <main class="page">
        <section class="promo page__promo py-3 py-md-5">
            <div class="container py-3">
                <div class="promo__wrapper row align-items-center">
                    <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                        <img :src="current_nutrion.image || '/_nuxt/assets/img/services/page_img.jpg'" alt="">
                    </div>
                    <div class="col-lg-7 col-xl-7">
                        <button @click="$router.go(-1)" class="page-nav">
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor" />
                            </svg>
                            Назад
                        </button>
                        <h1>{{ current_nutrion.title }}</h1>
                        <div class="promo__text">
                            {{ current_nutrion.description }}
                        </div>

                        <purchase-button :price="current_nutrion.price" :id="current_nutrion._id" place="nutrition" />
                    </div>

                </div>
            </div>
        </section>

        <div class="container">
            <section class="page__desc">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2>О ПРОГРАММЕ</h2>
                        <div v-html="current_nutrion?.about_program"></div>

                        <purchase-button :price="current_nutrion.price" :id="current_nutrion._id" place="nutrition" />

                    </div>
                </div>
            </section>

            <section class="others">
                <h3 class="others__header">С этой программой также покупают</h3>
                <div class="py-4">
                    <h2 class="text-center mb-md-4">Тренировки</h2>
                    <div class="row justify-content-center">
                        <div v-for="train in trainigs.splice(0, 2)" class="col-6 col-md-4">
                            <!-- service-item -->
                            <nuxt-link :to="'/trainings/' + train._id" class="service">
                                <img class="img-fluid" :src="train.image || image" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">{{ train.title }}</h3>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
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
                        <div v-for="course in courses.splice(0, 2)" class="col-6 col-md-4">
                            <!-- service-item -->
                            <nuxt-link :to="'/courses/' + course._id" class="service">
                                <img class="img-fluid" :src="course.image || image" alt="">
                                <div class="service__wrapper">

                                    <div>
                                        <h3 class="service__title">{{ course.title }}</h3>
                                        <div class="service__desc">{{ course.short_description }}</div>
                                    </div>
                                    <svg class="align-self-end" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626" />
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </nuxt-link>
                            <!-- end service-item -->
                        </div>
                    </div>

                    <nuxt-link to="/courses" class="btn btn-link btn-more">
                        Посмотреть все курсы
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" transform="rotate(90 8 8)" fill="#F52626" />
                            <path d="M11 7L8 10L5 7" stroke="white" stroke-width="0.933333" stroke-linejoin="round" />
                        </svg>
                    </nuxt-link>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import PurchaseButton from "~/components/PurchaseButton.vue";

const route = useRoute()

const current_nutrion = ref(await getCurrent(route.params.slug, '/nutrition'));

const image = ref(current_nutrion.value?.type === "men" ? '/_nuxt/assets/img/services/service_man.jpg' : '/_nuxt/assets/img/services/service_woman.jpg')

const trainigs = ref(await getTrainings())
const courses = ref(await getCourses())

onMounted(() => {
    localStorage.setItem('route', 'nutrition')
    localStorage.setItem('price', current_nutrion.value.price);
});
</script>