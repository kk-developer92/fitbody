<template>
    <Head>
        <Title>Программа тренировок {{ current_train.title }} - Fitbody</Title>
        <Meta name="description" :content="current_train.description"/>
    </Head>
    <div class="">
        <trainings-slug/>
    </div>
</template>

<script setup lang="ts">
const current_train = ref({});

</script>