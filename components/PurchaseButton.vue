<template>
    <button class="btn btn-primary button" @click="openModal" :data-bs-target="dtId" data-bs-toggle="modal">Купить
        за {{ props.price }} тыс. сум
    </button>
</template>

<script lang="ts" setup>
const props = defineProps<{ price: number }>();

const loginModal = useModal('loginModal');
const dtId = ref('#loginModal');
let text = 'Регистрация'

function openModal() {
    loginModal.open({text})
}

</script>

<style scoped>

</style>