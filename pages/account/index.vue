<template>
    <loading class="loading-value" v-if="isLoading"/>
    <div class="training__programs">
        <div class="container">
            <h1 class="mb-5">Мои покупки</h1>
            <div class="gy-4">
                <div v-if="!all.length && !isLoading">
                    <h1 style="text-align: center; font-size: 24px;">У вас пока ничего нет 😢</h1>
                </div>
                <div v-else class="row gy-4">
                    <div class="row gy-4" v-if="trainings?.length">
                        <h1 style="font-size: 24px;">Тренировки</h1>
                        <div v-for="training in trainings" class="col-6 col-md-4 cursor-pointer">
                            <nuxt-link :to="`/trainings/${training._id}`" class="service">
                                <img alt="" class="img-fluid" format="webp"
                                     :src="training.image || '/_nuxt/assets/img/services/service_man.jpg'"
                                     sizes="sm:100vw md:100vw lg:400px"/>

                                <div class="service__wrapper">
                                    <div>
                                        <h3 class="service__title">{{ training.title }}</h3>
                                    </div>
                                    <svg class="align-self-end" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#F52626"/>
                                        <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="row gy-4" v-if="nutrition?.length">
                        <h1 style="font-size: 24px;">Питание</h1>
                        <tab-block v-for="data in nutrition" route="nutritions" :section="data"></tab-block>
                    </div>
                    <div class="row gy-4" v-if="courses?.length">
                        <h1 style="font-size: 24px;">Курсы</h1>
                        <tab-block v-for="courses in courses" route="courses" :section="courses"></tab-block>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TabBlock from '~/components/common/TabBlock.vue';

definePageMeta({
    authRoute: true,
    middleware: 'auth'
});


const user: any = ref({});
const all: any = ref([]);
const isLoading = ref(false);


const trainings: any = ref([]);
const courses: any = ref([]);
const nutrition: any = ref([]);

onMounted(async () => {
    useFooter('footerComponent').hide();
    isLoading.value = true;
    const cookie: any = useCookie('token');
    const token: any = parseJwt(cookie.value);
    const res = await useService('rpc').create({
        method: "GetAccountCourses",
        data: {
            userId: token.sub
        }
    });

    trainings.value = res.data.trainings;
    courses.value = res.data.courses;
    nutrition.value = res.data.nutrition;

    all.value = res.data.all;
    isLoading.value = false;
});
</script>

<style scoped>
.loading-value {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
}
</style>