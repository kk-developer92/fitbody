<template>
    <button class="btn btn-primary button" @click="openModal" data-bs-target="#loginModal" data-bs-toggle="modal">Купить
        за {{ props.price }} тыс. сум
    </button>
</template>

<script lang="ts" setup>
const props = defineProps<{ price: { type: number } }>();

const loginModal = useModal('loginModal')

function openModal() {
    loginModal.open()
}

</script>

<style scoped>

</style>