<template>
    <main class="page">
        <section class="promo page__promo py-3 py-md-5">
            <div class="container py-3">
                <div class="promo__wrapper row align-items-center">
                    <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                        <img :src="current_nutrion.image || '/_nuxt/assets/img/services/page_img.jpg'" alt="">
                    </div>
                    <div class="col-lg-7 col-xl-7">
                        <button @click="$router.go(-1)" class="page-nav">
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                            </svg>
                            Назад
                        </button>
                        <h1>{{ current_nutrion.title }}</h1>
                        <div v-html="current_nutrion.description" class="promo__text"></div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <section class="training-page">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class=" py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row justify-content-center">
                                    <div class="col-md-10">
                                        <div v-for="content in current_nutrion.content"
                                             class="list-group list-group-flush">
                                            <h2 class="mb-5">{{ content.title }}</h2>
                                            <div
                                                v-for="day in content.days"
                                                class="card border-0 mb-3 shadow">
                                                <div class="card-body border-bottom">
                                                    <h5 class="card-title mb-0">{{ day.title }}</h5>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <div
                                                        class="list-group-item info-block b-0 py-2 text-decoration-none"
                                                        v-html="day.content">
                                                    </div>
                                                </div>
                                            </div>
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

<script setup lang="ts">

const route = useRoute()

const current_nutrion = ref(await getCurrent(route.params.slug, '/nutrition'));

const image = ref(current_nutrion.value?.type === "men" ? '/_nuxt/assets/img/services/service_man.jpg' : '/_nuxt/assets/img/services/service_woman.jpg')

</script>

<style scoped>

</style>