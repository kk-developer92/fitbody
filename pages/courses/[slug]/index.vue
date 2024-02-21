<template>
    <Head>
        <Title>Курсы {{ current_course.title }} - Fitbody</Title>
        <Meta name="description" :content="current_course.description"/>
    </Head>
    <div class="">
        <transition name="form">
            <main v-if="!isPurchased" class="page">
                <section class="promo page__promo py-3 py-md-5">
                    <div class="container py-3">
                        <div class="promo__wrapper row align-items-center">
                            <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                                <!-- <img :src="current_course.media.images.full || '/_nuxt/assets/img/services/page_img.jpg' " alt=""> -->
                                <img :src="current_course.image"/>
                            </div>
                            <div class="col-lg-7 col-xl-7">
                                <button @click="$router.go(-1)" class="page-nav">
                                    <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                                    </svg>
                                    Назад
                                </button>
                                <h1>{{ current_course.title }}</h1>
                                <div v-html="current_course.description" class="promo__text"></div>

                                <purchase-button :price="current_course.price" service="courses"
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
                                <div v-html="current_course?.about_program"></div>

                                <purchase-button :price="current_course.price" service="courses"
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
                                        <img class="img-fluid" :src="nutrition.image || image" alt="">
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
                            <h2 class="text-center mb-md-4">Тренировки</h2>
                            <div class="row justify-content-center">
                                <div v-for="train in filterByGender(trainings).splice(0, 2)" class="col-6 col-md-4">
                                    <!-- service-item -->
                                    <nuxt-link :to="'/trainings/' + train._id" class="service">
                                        <img class="img-fluid" :src="train.image || image" alt="">
                                        <div class="service__wrapper">

                                            <div>
                                                <h3 class="service__title">{{ train.title }}</h3>
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
                        </div>
                    </section>
                </div>
            </main>
        </transition>
        <transition name="form">
            <div v-if="isPurchased">
                <nutrition-purchased service="courses"/>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import checkPurchased from "~/utils/checkPurchased";
import TrainingIndex from "~/components/TrainingIndex.vue";

const route = useRoute()

const current_course = ref(await getCurrent(route.params.slug, '/courses'))

const image = ref(current_course.value.type === "men" ? '/_nuxt/assets/img/services/service_man.jpg' : '/_nuxt/assets/img/services/service_woman.jpg')

const nutrions = ref(await getNutrions(current_course.value.type, 2));
const trainings = ref(await getTrainings(current_course.value.type, 2));
const isPurchased: Ref<boolean | undefined> = ref(false);

isPurchased.value = await checkPurchased(route.params.slug);

function filterByGender(arr: any) {
    return arr.filter((el: any) => el._id !== current_course.value._id);
}

useFooter('footerComponent').show();

</script>