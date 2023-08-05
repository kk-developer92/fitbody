<template>
    <nuxt-layout data-bs-theme="dark">
        <nuxt-page></nuxt-page>
        <video-viewer/>
    </nuxt-layout>
</template>

<script setup lang="ts">
import "~/assets/sass/style.scss"
import VideoViewer from "~/components/modals/VideoViewer.vue";

useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },

        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },

        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@500;700;800&display=swap'
        },

        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
        },

    ],
    script: [
        {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
            integrity: "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz",
            crossorigin: "anonymous"
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js',
            type: "text/javascript"
        },


    ]
})


</script>


<style>
</style>