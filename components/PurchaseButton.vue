<template>
    <button class="btn btn-primary button" @click="purchase">Купить
        за {{ props.price }} тыс. сум
    </button>
</template>

<script lang="ts" setup>
import axios from 'axios';

const props = defineProps<{ price: number, id: string, place: string }>();

let storage: any = '';
const user: any = ref({});


onMounted(() => {
    storage = localStorage.getItem('user');

    user.value = JSON.parse(storage) || {};
});

const purchase = async () => {
    const { data } = await axios.get(`https://fitbody-4f554e8ece98.herokuapp.com/${props.place}/${props.id}`);

    await axios.patch(`http://localhost:3030/users/${user.value._id}`, { [props.place]: [...user.value[props.place], data] });
    
    const cookie = { ...user.value, [props.place]: [...user.value[props.place], data] };

    localStorage.setItem('user', JSON.stringify(cookie));
}

</script>

<style scoped></style>