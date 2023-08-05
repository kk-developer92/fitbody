<template>
    <modal id="videoModal" @shown="shown">
        <iframe :src="image" title="YouTube video"
                    allowfullscreen></iframe>
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";

const image: any = ref();

function shown(data: any) {
    image.value = data
}

</script>

<style scoped>

</style>