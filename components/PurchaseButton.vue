<template>
    <button class="btn btn-primary button" @click="redirect">
        <span v-if="+props.price !== 0">Купить за {{ props.price }} тыс. сум</span>
        <span v-else>Бесплатно</span>
    </button>
</template>

<script lang="ts" setup>

import purchaseCourse from "~/utils/purchaseCourse";

const props = defineProps<{ price: number, id: string, place: string }>();

const route = useRoute().params.slug;

const redirect = async () => {
    const token: any = useCookie('token');

    let user: any

    if (token.value) {
        user = parseJwt(token?.value || '');
    }

    if (!user?._id) {
        navigateTo({path: '/login'});
        return;
    }

    try {
        await purchaseCourse(user, props);
    } catch (e) {
        console.log(e);
    }
}

</script>

<style scoped></style>