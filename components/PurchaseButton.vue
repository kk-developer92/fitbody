<template>
    <button class="btn btn-primary button" @click="redirect">Купить
        за {{ props.price }} тыс. сум
    </button>
</template>

<script lang="ts" setup>

import purchaseCourse from "~/utils/purchaseCourse";

const props = defineProps<{ price: number, id: string, place: string }>();

const route = useRoute().params.slug;

const redirect = async () => {
    const token: any = useCookie('token');

    const user: any = parseJwt(token.value);

    if (!user._id) {
        navigateTo({path: '/login'});
        return;
    }

    try {
        await purchaseCourse(user, props);
        navigateTo('/account');
    } catch (e) {
        console.log(e);
    }
}

</script>

<style scoped></style>