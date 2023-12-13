<template>
    <button class="btn btn-primary button" @click="redirect">Купить
        за {{ props.price }} тыс. сум
    </button>
</template>

<script lang="ts" setup>

const props = defineProps<{ price: number, id: string, place: string }>();

const user: any = ref({});
const route = useRoute().params.slug;

const redirect = async () => {
    if (!user.value.phone) {
        navigateTo({path: '/login'});
    }
}

</script>

<style scoped></style>