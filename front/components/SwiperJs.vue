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
                    prevEl: '.myPrev',
                    nextEl: '.myNext'
                }"
    >
        <swiper-slide v-for="slide in props.data">
            <a data-fancybox="diploms" :href="slide">
                <img :src="slide"/>
            </a>
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper";

const props = defineProps<{ data: any }>()

</script>

<style scoped>

</style>