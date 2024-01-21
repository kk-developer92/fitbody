<template>
    <Head>
        <Title>Программа тренировок {{ current_train.title }} - Fitbody</Title>
        <Meta name="description" :content="current_train.description"/>
    </Head>
    <div class="">
        <trainings-slug service="trainings"/>
    </div>
</template>

<script setup lang="ts">
const id: any = useRoute().params.slug;

const res = await useService('trainings').get(id);

const current_train = ref(res.data);

</script>