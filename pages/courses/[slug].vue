<template>
    <Head>
        <Title>Курсы {{ current_course.title }} - Fitbody</Title>
        <Meta name="description" :content="current_course.description" />
    </Head>
    <main class="page">
        <section class="promo page__promo py-3 py-md-5">
            <div class="container py-3">
                <div class="promo__wrapper row align-items-center">
                    <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                        <!-- <img :src="current_course.media.images.full || '/_nuxt/assets/img/services/page_img.jpg' " alt=""> -->
                        <nuxt-img :src="current_course.image" />
                    </div>
                    <div class="col-lg-7 col-xl-7">
                        <button @click="$router.go(-1)" class="page-nav">
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor" />
                            </svg>
                            Назад
                        </button>
                        <h1>{{ current_course.title }}</h1>
                        <div class="promo__text">
                            {{ current_course.description }}
                        </div>

                        <purchase-button :price="current_course.price" class="btn btn-primary button" />
                    </div>

                </div>
            </div>
        </section>

        <div class="container">
            <section class="page__desc">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2>О ПРОГРАММЕ</h2>
                        <div v-html="current_course.about_program"></div>

                        <purchase-button :price="current_course.price" class="btn btn-primary button" />
                    </div>
                </div>
            </section>

            <section class="others">
                <h3 class="others__header">С этой программой также покупают</h3>
                <div class="py-4">
                    <h2 class="text-center mb-md-4">Питание</h2>
                    <div class="row justify-content-center">
                        <div v-for="nutrition in nutrions.splice(0, 2)" class="col-6 col-md-4">
                            <!-- service-item -->
                            <nuxt-link :to="'/nutritions/' + nutrition._id" class="service">
                                <img class="img-fluid" :src="nutrition.image || image" alt="">
                                <div class="service__wrapper">

                                    <h3 class="service__title">{{ nutrition.title }}</h3>
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
                    <h2 class="text-center mb-md-4">Тренировки</h2>
                    <div class="row justify-content-center">
                        <div v-for="train in trainings.splice(0, 2)" class="col-6 col-md-4">
                            <!-- service-item -->
                            <nuxt-link :to="'/trainings/' + train._id" class="service">
                                <img class="img-fluid" :src="train.image || image" alt="">
                                <div class="service__wrapper">

                                    <div>
                                        <h3 class="service__title">{{ train.title }}</h3>
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

                    
                </div>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
const route = useRoute()

const current_course = ref(await getCurrent(route.params.slug, '/courses'))

const image = ref(current_course.value.type === "men" ? '/_nuxt/assets/img/services/service_man.jpg' : '/_nuxt/assets/img/services/service_woman.jpg')

const nutrions = ref(await getNutrions())
const trainings = ref(await getTrainings())
</script>