<template>
    <button class="btn btn-primary button" @click="redirect">Купить
        за {{ props.price }} тыс. сум
    </button>
</template>

<script lang="ts" setup>

import axios from "axios";

const props = defineProps<{ price: number, id: string, place: string }>();

let storage: any = '';
const user: any = ref({});
const route = useRoute().params.slug;

onMounted(() => {
    storage = localStorage.getItem('user');

    user.value = JSON.parse(storage) || {};
});

const redirect = async () => {
    if (!user.value.phone) {
        navigateTo({
            path: '/signup',
            query: {
                place: props.place,
                id: route
            }
        });
    }

    const purchased = await axios.get(import.meta.env.VITE_API_URL + `/${props.place}/${route}`);
    const trainings = [...user.value[props.place], purchased.data];
    await axios.patch(import.meta.env.VITE_API_URL + `/users/${user.value._id}`, {[props.place]: trainings});
    const usr = await axios.get(import.meta.env.VITE_API_URL + `/users/${user.value._id}`);
    localStorage.setItem('user', JSON.stringify(usr.data));
    navigateTo('/account');
}

</script>

<style scoped></style>