<template>
    <modal class="modal fade" id="imageModal" size="lg" @shown="shown">
        <img class="w-100" :src="image" alt="">
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";

const image: any = ref();

function shown(data: any) {
    image.value = 'https://fitbody-4f554e8ece98.herokuapp.com' + data
}

</script>

<style scoped></style>