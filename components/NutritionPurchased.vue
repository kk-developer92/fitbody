<template>
    <main class="page">
        <div class="container">
            <section class="training-page">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class="py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 trainings d-flex flex-column gap-2">
                                        <button @click="useRouter().back()" class="page-nav">
                                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                                            </svg>
                                            Назад
                                        </button>
                                        <h2 class="red__text">{{ current_nutrition.title }}</h2>
                                        <div v-for="content in current_nutrition.content"
                                             class="card border-0 shadow trainings">
                                            <div class="accordion accordion-flush faq__accordion" id="accordionFaq">
                                                <div class="accordion-item">
                                                    <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            :data-bs-target="'#' + content._id"
                                                            aria-expanded="false">
                                                        <h5 class="card-title mb-0 p-1">{{ content.title }}</h5>
                                                    </button>
                                                    <div :id="content._id" class="accordion-collapse collapse"
                                                         data-bs-parent="#accordionFaq">
                                                        <nuxt-link
                                                            v-for="day in content.days"
                                                            class="nuxt-link list-group-item list-group-item-action d-flex justify-content-between align-items-center cursor-pointer"
                                                            :to="router.fullPath + '/' + day._id"
                                                        >
                                                            <div class="p-4">
                                                                <h6 class="mb-0 title_font"> {{ day.title }} </h6>
                                                            </div>
                                                        </nuxt-link>
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

const route: any = useRoute();

const current_nutrition: any = ref({});

const res = await useService('nutrition').get(route.params.slug);

current_nutrition.value = res.data;

const image = ref(current_nutrition.value?.type === "men" ? '/_nuxt/assets/img/services/service_man.jpg' : '/_nuxt/assets/img/services/service_woman.jpg')
const router = useRoute();
useFooter('footerComponent').hide();
</script>

<style scoped>
.accordion-item {
    border-radius: 7px;
}

.nuxt-link {
    border-bottom: 1px solid #494949;
}

.nuxt-link:hover .title_font {
    color: white;
}

.title_font {
    font-size: 19px !important;
    transition: .2s ease;
}
</style>