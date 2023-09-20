<template>
    <button class="btn btn-primary button" @click="purchase">Купить
        за {{ props.price }} тыс. сум
    </button>
</template>

<script lang="ts" setup>
import axios from 'axios';

const props = defineProps<{ price: number, id: string, place: string }>();

const storage: any = localStorage.getItem('user')
const user: any = JSON.parse(storage) || {};

const purchase = async () => {
    const { data } = await axios.get(`https://fitbody-4f554e8ece98.herokuapp.com/${props.place}/${props.id}`);

    await axios.patch(`http://localhost:3030/users/${user._id}`, { [props.place]: [...user[props.place], data] });

    const cookie = { ...user, [props.place]: [...user[props.place], data] };

    localStorage.setItem('user', JSON.stringify(cookie));
}

</script>

<style scoped></style>