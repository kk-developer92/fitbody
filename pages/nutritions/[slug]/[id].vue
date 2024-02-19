<template>
    <Head>
                <Title>Программа питание {{ nutrition.data?.content.title }} - Fitbody</Title>
<!--                <Meta name="description" :content="current_nutrion.description"/>-->
    </Head>
    <div>
        <div v-if="!nutrition.data?.content2" class="col-lg-12 mx-auto py-5">
            <div class="container py-5 col-lg-7 col-xl-7">
                <h1 style="text-align: center; font-size: 24px;">Мы ничего не нашли 😢</h1>
            </div>
        </div>
        <div v-else class="col-lg-12 mx-auto py-5">
            <div class="container py-3 col-lg-7 col-xl-7">
                <div
                    class="card border border-0 mb-3 shadow">
                    <div class="card-body border-bottom">
                        <h5 class="card-title mb-0">{{ nutrition.data.content.title }}</h5>
                    </div>
                    <div class="list-group list-group-flush">
                        <div
                            class="list-group-item info-block b-0 py-2 text-decoration-none"
                            v-html="nutrition.data.content.content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const {slug: nutritionId, id: dayId}: any = useRoute().params;
const nutrition = await useService('rpc').create({
    method: 'GetNutrition',
    data: {
        nutritionId, dayId
    }
});

useFooter('footerComponent').hide();
</script>

<style>
.border {
    border-radius: 5px !important;
}
</style>