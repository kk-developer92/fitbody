<template>
    <nuxt-link class="btn btn-primary button" :to="`/payment/${route}`">Купить
        за {{ props.price }} тыс. сум
    </nuxt-link>
</template>

<script lang="ts" setup>
import axios from 'axios';

const props = defineProps<{ price: number, id: string, place: string }>();

let storage: any = '';
const user: any = ref({});
const route = useRoute().params.slug;

onMounted(() => {
    storage = localStorage.getItem('user');

    user.value = JSON.parse(storage) || {};
});


</script>

<style scoped></style>