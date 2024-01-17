<template>
    <swiper
            :breakpoints="{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 2
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2
                    },
                    767: {
                        slidesPerView: 3
                    },
                    // when window width is >= 640px
                    992: {
                        slidesPerView: 4
                    }
                }"
            :modules="[Navigation]"
            :loop="true"
            :slides-per-view="4"
            :space-between="20"
            :navigation="{
                    enabled: true,
                    prevEl: props.prev,
                    nextEl: props.next
                }"
    >
        <swiper-slide v-for="slide in props.data">
            <a @click="openModal(slide)" data-bs-toggle="modal" href="#imageModal">
                <span>
                    <!-- <img :src="slide"/> -->
                    <img alt="" :src="getSlide(slide)" sizes="sm:100vw md:50vw lg:300px"/>
                </span>
            </a>
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper";

const props = defineProps<{ data: any, next: string, prev: string }>()

const imageModal = useModal('imageModal')

function openModal(slide: string) {
    console.log(slide);
    imageModal.open(slide)
}

function getSlide(slide: string) {
    return 'https://storage.cloud.google.com/amadea' + slide
}

</script>

<style scoped>

</style>