<template>
    <modal class="modal fade" id="videoModal" size="lg" @shown="shown">
        <div class="ratio ratio-16x9">
            <iframe width="914" height="514" :src="image" title="Разгибания ног сидя"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
        </div>
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";

const image: any = ref();

function shown(data: any) {
    image.value = data
    makeYoutubeVideo();
}

function makeYoutubeVideo() {
    const videoId = image.value.split('/')[3];
    image.value = `https://www.youtube.com/embed/${videoId}`;
}

</script>

<style scoped></style>