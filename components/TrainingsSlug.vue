<template>
    <main class="page">
        <div class="container">
            <section class="training-page">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class=" py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row justify-content-center">
                                    <div class="col-md-10">
                                        <div class="list-group list-group-flush">
                                            <button @click="useRouter().back()" class="page-nav">
                                                <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                                                </svg>
                                                Назад
                                            </button>
                                            <train-block v-for="data in training?.trainings" :data="data"
                                                         :name="training.name"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script lang="ts" setup>
const props = defineProps<{ service: string }>()
const route: any = useRoute().params;
const training: any = ref({});

async function fetch() {
    const res = await useService('rpc').create({
        method: 'GetDay',
        data: {
            service: props.service,
            dayId: route.id,
            courseId: route.slug
        }
    });

    training.value = res.data;
}

fetch();
</script>

<style>
</style>