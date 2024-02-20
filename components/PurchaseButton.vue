<template>
    <button class="btn btn-primary button" @click="purchase">
        <span v-if="+props.price !== 0">Купить за {{ props.price.toLocaleString() }} сум</span>
        <span v-else>Бесплатно</span>
    </button>
</template>

<script lang="ts" setup>

import purchaseCourse from "~/utils/purchaseCourse";

const props = defineProps<{ price: number, service: string }>();

const courseId = useRoute().params.slug;

async function purchase() {
    const token: any = useCookie('token');

    let user: any

    if (token.value) {
        user = parseJwt(token?.value);
    }

    if (!user?.sub) {
        return navigateTo({path: '/login'});
    }

    try {
        await purchaseCourse(props.service, courseId, user.sub);
    } catch (e) {
        console.log(e);
    }
}


</script>

<style scoped></style>