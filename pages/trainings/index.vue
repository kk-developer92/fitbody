<template>
    <div>
        <div class="bg-dark">
            <div class="container">
                <div class="d-flex flex-column align-items-sm-center justify-content-center gap-4 gap-am-5">
                    <nuxt-link to="/" class="page-nav">
                        <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                        </svg>
                        На главную
                    </nuxt-link>
                    <h1 class="text-uppercase">Тренировки</h1>
                    <p>{{ trainings.description }}</p>

                    <section class="traning pt-lg-5">
                        <ul class="nav nav-tabs tab-gender pt-2 justify-content-center" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#training-man"
                                        type="button" role="tab" aria-selected="true">Для мужчин
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#training-woman"
                                        type="button"
                                        role="tab" aria-selected="false">Для женщин
                                </button>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="training__programs">
                <section class="">

                    <div class="tab-content" id="training">
                        <div class="tab-pane fade show active" id="training-man" role="tabpanel" tabindex="0">
                            <!-- second tab nav -->
                            <ul class="nav nav-tabs train-tab-gender pt-2 justify-content-center" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#junior-man"
                                            type="button" role="tab" aria-selected="true">
                                        НОВИЧКИ
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#lead-man"
                                            type="button"
                                            role="tab" aria-selected="false">
                                        ОПЫТНЫЕ
                                    </button>
                                </li>
                            </ul>


                            <div class="tab-content mt-5">
                                <!-- sub man tab 1 -->
                                <div class="tab-pane fade show active" id="junior-man">

                                    <div class="row gy-4 justify-content-md-center">
                                        <div v-for="train in train_beginner" class="col-6 col-md-4">
                                            <!-- service-item -->
                                            <nuxt-link :to="'/trainings/' + train._id" class="service">
                                                <!-- <img class="img-fluid" :src="train.media.images.full" alt=""> -->
                                                <img alt="" class="img-fluid" format="webp"
                                                     :src="train.image || '/_nuxt/assets/img/services/service_man.jpg'"
                                                     sizes="sm:100vw md:100vw lg:600px"/>

                                                <div class="service__wrapper">

                                                    <h3 class="service__title">{{ train.title }}</h3>
                                                    <svg class="align-self-end" width="30" height="30"
                                                         viewBox="0 0 30 30" fill="none"
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

                                <!-- sub man tab 2 -->
                                <div class="tab-pane fade" id="lead-man">

                                    <div class="row gy-4 justify-content-md-center">
                                        <div v-for="train in train_master" class="col-6 col-md-4">
                                            <!-- service-item -->
                                            <nuxt-link :to="'trainings/' + train._id" class="service">
                                                <!-- <img class="img-fluid" :src="train.media.images.full || '/_nuxt/assets/img/services/lead_man.jpg'" alt=""> -->
                                                <img alt="" class="img-fluid" format="webp"
                                                     :src="train.image || '/_nuxt/assets/img/services/lead_man.jpg'"
                                                     sizes="sm:100vw md:100vw lg:600px"/>
                                                <div class="service__wrapper">

                                                    <h3 class="service__title">{{ train.title }}</h3>
                                                    <svg class="align-self-end" width="30" height="30"
                                                         viewBox="0 0 30 30" fill="none"
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
                            </div>

                        </div>
                        <!-- woman tab -->
                        <div class="tab-pane fade" id="training-woman" role="tabpanel" tabindex="0">
                            <ul class="nav nav-tabs train-tab-gender justify-content-center" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#junior-woman"
                                            type="button" role="tab" aria-selected="true">
                                        НОВИЧКИ
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#lead-woman"
                                            type="button"
                                            role="tab" aria-selected="false">
                                        ОПЫТНЫЕ
                                    </button>
                                </li>
                            </ul>

                            <div class="tab-content mt-5">
                                <!-- sub woman tab 1 -->
                                <div class="tab-pane fade show active" id="junior-woman">
                                    <div class="row gy-4">
                                        <div v-for="train in train_beginner_w" class="col-6 col-md-4">
                                            <!-- service-item -->
                                            <nuxt-link :to="'/trainings/' + train._id" class="service">
                                                <!-- <img class="img-fluid" :src="train.media.images.full || '/_nuxt/assets/img/services/junior_woman.jpg'" alt=""> -->
                                                <img alt="" class="img-fluid" format="webp"
                                                     :src="train.image || '/_nuxt/assets/img/services/junior_woman.jpg'"
                                                     sizes="sm:100vw md:100vw lg:600px"/>

                                                <div class="service__wrapper">

                                                    <h3 class="service__title">{{ train.title }}</h3>
                                                    <svg class="align-self-end" width="30" height="30"
                                                         viewBox="0 0 30 30" fill="none"
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

                                <!-- sub woman tab 2 -->
                                <div class="tab-pane fade" id="lead-woman">
                                    <div class="row gy-4">
                                        <div v-for="train in train_advanced_w" class="col-6 col-md-4">
                                            <!-- service-item -->
                                            <nuxt-link :to="'/trainings/' + train._id" class="service">
                                                <!-- <img class="img-fluid" :src="train.media.images.full || '/_nuxt/assets/img/services/junior_woman.jpg'" alt=""> -->
                                                <img alt="" class="img-fluid" format="webp"
                                                     :src="train.image || '/_nuxt/assets/img/services/junior_woman.jpg'"
                                                     sizes="sm:100vw md:100vw lg:600px"/>

                                                <div class="service__wrapper">

                                                    <h3 class="service__title">{{ train.title }}</h3>
                                                    <svg class="align-self-end" width="30" height="30"
                                                         viewBox="0 0 30 30" fill="none"
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
                            </div>


                        </div>
                    </div>
                </section>
                <a class="btn btn-primary button mt-5" href="#">Заказать индивидуальную программу</a>
            </div>
            <div class="program__video">
                <h2>Ошибки новичков</h2>
            </div>
            <section class="video pb-3 pb-md-5">
                <div class="container">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dvkozMW37Qc?rel=0" title="YouTube video"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>

import axios from "axios";
import {trainings} from "~/data";
import {loadFile} from "magicast";

useHead({
    title: "Тренировки | FitBody",
    meta: [
        {
            name: "description",
            content: "фитнес тренер, который составляет программы тренировок в тренажерном зале на основе ваших целей и силовых показателей."
        }
    ]
})

const res = await useService('trainings').find();

async function getTraining(type: string, complexity: string) {
    return res.data.data.filter((i: any) => i.complexity === complexity && i.type === type);
}

const train_beginner = ref(await getTraining('men', 'beginner'));
const train_master = ref(await getTraining('men', 'advanced'));
const train_beginner_w = ref(await getTraining('women', 'beginner'));
const train_advanced_w = ref(await getTraining('women', 'advanced'));
</script>

<style scoped></style>