<template>
    <main class="page">
        <section class="promo page__promo py-3 py-md-5">
            <div class="container py-3">
                <div class="promo__wrapper row align-items-center">
                    <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                        <img
                            :src="'https://fitseven.ru/wp-content/uploads/2019/07/pitanie-pri-trenirovkah-na-massu.jpg'"
                            alt="">
                    </div>
                    <div class="promo__text col-lg-7 col-xl-7">
                        <button @click="$router.go(-1)" class="page-nav">
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                            </svg>
                            Назад
                        </button>
                        <h1>{{ training?.name }}</h1>
                    </div>

                </div>
            </div>
        </section>

        <div class="container">
            <section class="training-page">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class=" py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row justify-content-center">
                                    <div class="col-md-10">
                                        <div class="list-group list-group-flush">
                                            <train-block v-for="data in training?.trainings" :data="data"/>
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
import checkPurchased from "~/utils/checkPurchased";

const props = defineProps<{ path: string }>()
const route = useRoute().params;
const weeks = ref(await getCurrent(route.slug, `/${props.path}`));
const training = ref();

console.log('asdasdad');

onMounted(() => {
    const isPurchased = checkPurchased(props.path, route.slug);

    if (!isPurchased) {
        navigateTo('/')
    }
});

function getDay() {
    for (let week of weeks.value.exercises) {
        for (let day of week.data) {
            if (day._id === route.id) {
                training.value = day
            }
        }
    }
}

getDay();
</script>