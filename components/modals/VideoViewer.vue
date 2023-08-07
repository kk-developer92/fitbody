<template>
    <modal class="modal fade" id="videoModal" size="lg" @shown="shown">
        <div class="ratio ratio-16x9">
            <iframe :src="image" title="YouTube video" allowfullscreen></iframe>
        </div>
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