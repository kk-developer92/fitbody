<template>
    <section class="promo">
        <div class="container">
            <div class="promo__wrapper row align-items-center">
                <div class="promo__image col-lg-5 col-xl-6 order-lg-last text-lg-end">
                    <img alt="promo_bg" class="img-fluid" src="~/assets/img/promo_bg.webp"/>
                </div>
                <div class="promo__text col-lg-7 col-xl-6">
                    <h1>ЖИРОСЖИГАНИЕ <br>и РОСТ МЫШЦ <span>НАУЧНЫЙ ПОДХОД</span></h1>
                    <div class="promo__text">
                        Здесь представлены самые эффективные методы тренировок, которые пропущены через призму
                        БИОМЕХАНИКИ,
                        АНАТОМИИ мышц и ФИЗИОЛОГИИ мышечной деятельности
                    </div>

                    <a class="btn btn-primary button" href="#programs">Выбрать программу тренировок</a>
                </div>

            </div>
        </div>
    </section>
    <!-- traiing -->
    <render-cacheable>
        <section id="programs" v-for="section in sections" class="traning pb-3 pb-lg-5 ">
            <div class="container">
                <h2 class="text-center mb-md-4">{{ section.title }}</h2>
                <tab-header :dataTarget="section.target"></tab-header>
                <!-- tab1 -->
                <div class="tab-content" id="training">
                    <div class="tab-pane fade show active" :id="section.target.man" role="tabpanel" tabindex="0">
                        <div class="row justify-content-center">
                            <tab-block v-for="course in section.man" :route="section.route"
                                       :section="course"></tab-block>
                        </div>
                    </div>
                    <div class="tab-pane fade" :id="section.target.woman" role="tabpanel" tabindex="0">
                        <div class="row justify-content-center">
                            <tab-block v-for="course in section.woman" :route="section.route"
                                       :section="course"></tab-block>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </render-cacheable>
    <section class="about py-md-5">
        <about></about>
    </section>
    <section class="video">
        <div class="container">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/dvkozMW37Qc?rel=0" title="YouTube video"
                        allowfullscreen></iframe>

            </div>
        </div>
    </section>
    <section class="categories py-3 py-md-5">
        <render-cacheable>
            <categories-main></categories-main>
        </render-cacheable>
    </section>
    <section class="diploms py-3 py-md-5">
        <div class="container py-3">

            <h2 class="head-nav">
                Дипломы и сертификаты
                <div class="pagination">
                    <button class="myPrev">
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1L1 10L10 19" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="myNext">
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 10L1 19" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                        </svg>

                    </button>
                </div>
            </h2>
            <render-cacheable>
                <swiper-js :data="slides" prev=".myPrev" next=".myNext"></swiper-js>
            </render-cacheable>
        </div>
    </section>
    <section class="video py-3">
        <div class="container py-3">
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/dvkozMW37Qc?rel=0" title="YouTube video"
                        allowfullscreen></iframe>
            </div>
        </div>
    </section>
    <section class="reviews py-3 py-md-5">
        <div class="container">
            <h2 class="head-nav">
                Отзывы
                <div class="pagination">
                    <button class="Prev">
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1L1 10L10 19" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="Next">
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 10L1 19" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                        </svg>

                    </button>
                </div>
            </h2>
            <render-cacheable>
                <swiper-js :data="reviews" prev=".Prev" next=".Next"></swiper-js>
            </render-cacheable>
        </div>
    </section>
    <section class="buttons py-4 py-md-5">
        <div class="container">
            <div class="buttons__wrap row gy-4">
                <div class=" col-lg-4">
                    <nuxt-link to="/trainings" class="btn btn-primary button w-100">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M29.1178 15.3883L34.6097 20.8802L20.8785 34.6113L15.3867 29.1194L29.1178 15.3883Z"
                                  stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.86393 22.9129C8.22789 22.549 8.818 22.549 9.18197 22.9129L27.0869 40.8179C27.4509 41.1818 27.4509 41.772 27.0869 42.1359L24.2861 44.9368C23.9221 45.3007 23.332 45.3007 22.968 44.9368L5.06308 27.0318C4.69911 26.6679 4.69911 26.0777 5.06308 25.7138L7.86393 22.9129Z"
                                  stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.86393 31.1526C8.22789 30.7886 8.818 30.7886 9.18197 31.1526L18.8491 40.8197C19.2131 41.1837 19.2131 41.7738 18.8491 42.1378L16.0483 44.9386C15.6843 45.3026 15.0942 45.3026 14.7302 44.9386L5.06308 35.2714C4.69911 34.9075 4.69911 34.3174 5.06308 33.9534L7.86393 31.1526Z"
                                  stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M42.1352 27.0885C41.7713 27.4525 41.1811 27.4525 40.8172 27.0885L22.9122 9.18359C22.5483 8.81962 22.5483 8.22951 22.9122 7.86554L25.7131 5.06469C26.077 4.70073 26.6672 4.70072 27.0311 5.06469L44.9361 22.9696C45.3 23.3336 45.3 23.9237 44.9361 24.2877L42.1352 27.0885Z"
                                  stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M42.1352 18.8473C41.7713 19.2113 41.1811 19.2113 40.8172 18.8473L31.15 9.18017C30.7861 8.8162 30.7861 8.22609 31.15 7.86213L33.9509 5.06128C34.3148 4.69731 34.9049 4.69731 35.2689 5.06128L44.9361 14.7284C45.3 15.0924 45.3 15.6825 44.9361 16.0465L42.1352 18.8473Z"
                                  stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        Выбрать программу
                    </nuxt-link>
                </div>
                <div class=" col-lg-4">
                    <nuxt-link to="/nutritions" class="btn btn-primary button w-100">
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.37862 42.728L8.20039 43.2759C9.4793 44.1285 10.982 44.5834 12.519 44.5834H32.8044C34.3415 44.5834 35.8441 44.1285 37.123 43.2759L37.9448 42.7279C40.1107 41.284 41.4117 38.8532 41.4117 36.2501V36.2501C41.4117 35.0995 40.479 34.1667 39.3284 34.1667H5.99508C4.84448 34.1667 3.91174 35.0995 3.91174 36.2501V36.2501C3.91174 38.8532 5.2127 41.2841 7.37862 42.728V42.728Z"
                                  stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path
                                d="M38.9198 34.1667C39.1847 32.1541 38.0642 30.2146 36.1883 29.4388L36.0939 29.3997C34.9937 28.9447 34.1198 28.0707 33.6647 26.9706L33.6254 26.8756C32.8497 25 30.9106 23.8798 28.8983 24.1445L28.7892 24.1589C27.6072 24.3144 26.4119 23.9939 25.4663 23.2679L25.3913 23.2102C23.7816 21.9744 21.5423 21.9744 19.9327 23.2102L19.8478 23.2754C18.9053 23.999 17.7139 24.3185 16.5358 24.1635L16.4233 24.1487C14.4108 23.8838 12.4716 25.005 11.697 26.8813L11.6592 26.9727C11.2044 28.0742 10.3295 28.9492 9.22795 29.4039L9.13654 29.4417C7.26026 30.2163 6.13907 32.1555 6.40387 34.168"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M13.2073 24.9584L4.83225 16.5834C4.0404 15.795 3.73008 14.6436 4.01849 13.5641C4.30691 12.4846 5.1501 11.6414 6.22964 11.353C7.30917 11.0646 8.46054 11.3749 9.24892 12.1667L20.1448 23.0626"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M47.2496 18.9585H18.0988M34.75 28.3334V19.3056C34.75 18.4041 35.0424 17.5268 35.5833 16.8056L41 9.58337M41 9.58337L46.4159 16.8056C46.9568 17.5268 47.2492 18.4041 47.2492 19.3056V40.4167C47.2492 42.7179 45.3837 44.5834 43.0825 44.5834H32.6659M41 9.58337L40.9992 5.41671C40.9992 4.26611 40.0664 3.33337 38.9159 3.33337H26.4159C25.2653 3.33337 24.3325 4.26611 24.3325 5.41671V9.58337M24.3325 9.58337L18.9159 16.8056C18.3749 17.5268 18.0825 18.4041 18.0825 19.3056V20.0695M24.3325 9.58337L40.9984 9.58327"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Выбрать питание
                    </nuxt-link>
                </div>
                <div class="col-lg-4">
                    <nuxt-link to="/courses" class="btn btn-primary button w-100">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M39.5837 10.4166H41.667C43.9691 10.4166 45.8337 12.2812 45.8337 14.5833V39.5833C45.8337 41.8854 43.9691 43.75 41.667 43.75H8.33366C6.03158 43.75 4.16699 41.8854 4.16699 39.5833V14.5833C4.16699 12.2812 6.03158 10.4166 8.33366 10.4166H10.417"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M25.0003 12.5C25.0003 9.04792 22.2024 6.25 18.7503 6.25H12.5003C11.3503 6.25 10.417 7.18333 10.417 8.33333V35.4167C10.417 36.5667 11.3503 37.5 12.5003 37.5H18.7503C22.2024 37.5 25.0003 40.2979 25.0003 43.75C25.0003 40.2979 27.7982 37.5 31.2503 37.5H37.5003C38.6503 37.5 39.5837 36.5667 39.5837 35.4167V8.33333C39.5837 7.18333 38.6503 6.25 37.5003 6.25H31.2503C27.7982 6.25 25.0003 9.04792 25.0003 12.5Z"
                                  stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M24.9996 12.5V43.75" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>


                        Выбрать курс
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import 'swiper/css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import TabHeader from "~/components/common/TabHeader.vue";
import TabBlock from "~/components/common/TabBlock.vue";
import About from "~/components/About.vue";
import CategoriesMain from "~/components/common/categories/CategoriesMain.vue";

const slides = ref(["/_nuxt/assets/img/diploms/diplom-1.webp", "/_nuxt/assets/img/diploms/diplom-2.webp", "/_nuxt/assets/img/diploms/diplom-3.webp", "/_nuxt/assets/img/diploms/diplom-4.webp", "/_nuxt/assets/img/diploms/diplom-5.webp", "/_nuxt/assets/img/diploms/diplom-6.webp", "/_nuxt/assets/img/diploms/diplom-7.webp", "/_nuxt/assets/img/diploms/diplom-5.webp", "/_nuxt/assets/img/diploms/diplom-6.webp", "/_nuxt/assets/img/diploms/diplom-7.webp"])
const reviews = ref(["/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png", "/_nuxt/assets/img/reviews/review-1.png"])

const train_beginner = ref(await getTrainings('men'));
const train_beginner_w = ref(await getTrainings('women'));

const course_men = ref(await getCourses('men'));
const course_women = ref(await getCourses('women'));

const nutrition = ref(await getNutrions('men'));
const nutrition_w = ref(await getNutrions('women'));

const sections = ref([
    {
        title: 'Тренировки',
        route: 'trainings',
        target: {
            man: 'training-man',
            woman: 'training-woman'
        },
        woman: train_beginner_w.value.splice(0, 2),
        man: train_beginner.value.splice(0, 2),
    },
    {
        title: 'Питание',
        route: 'nutritions',
        target: {
            man: 'nutrition-man',
            woman: 'nutrition-woman'
        },
        woman: nutrition_w.value.splice(0, 2),
        man: nutrition.value.splice(0, 2),
    },
    {
        title: 'Курсы',
        route: 'courses',
        target: {
            man: 'courses-man',
            woman: 'courses-woman'
        },
        woman: course_women.value.splice(0, 2),
        man: course_men.value.splice(0, 2),
    }
])

</script>

<style lang="scss"></style>
