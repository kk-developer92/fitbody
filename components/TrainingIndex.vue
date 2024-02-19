<template>
    <main class="page">
        <div class="container">
            <section class="page__desc">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class="py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row justify-content-center">
                                    <div class="col-md-10">
                                        <button @click="useRouter().back()" class="page-nav">
                                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                                            </svg>
                                            Назад
                                        </button>
                                        <div class="list-group list-group-flush">
                                            <h2 class="red__text">{{ training?.title }}</h2>
                                            <training-weeks v-for="week in training?.exercises" :data="week"/>
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
const route: any = useRoute().params.slug;
const training = ref({});

const res = await useService(props.service).get(route);

training.value = res.data;

useFooter('footerComponent').hide();
</script>