<template>
    <modal class="modal fade" id="imageModal" size="lg" @shown="shown">
        <img :src="image" alt="">
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";

const image: any = ref();

function shown(data: any) {
    image.value = data
}

</script>

<style scoped></style>