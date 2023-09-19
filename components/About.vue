<template>
    <div class="container py-3">
        <div class="about__wrapper row align-items-center">
            <div class="about__image text-center col-lg-4">
                <!-- <img class="img-fluid" src="~/assets/img/about_img.png" alt=""> -->
                <nuxt-img format="webp" :src="about_img" sizes="sm:100vw md:50vw lg:600px"  />
            </div>
            <div class="about__text col-lg-8">
                <h2 class="about__title">Рамис Сахибов</h2>
                <ul class="about__list">
                    <li>
                        <h3>Образование:</h3>
                        <p>Физико-Математический факультет, СамГУ</p>
                    </li>
                    <li>
                        <h3>Фитнес Образование:</h3>
                        <p>— Персональный Тренер категории "Премиум", Москва, "Учёный Фитнес"</p>
                        <p>— Фитнес - Нутрициолог категории "Премиум", Москва, "Учёный Фитнес"</p>
                    </li>
                    <li>
                        <p><strong>Тренировочный стаж:</strong> более 15 лет</p>
                    </li>
                    <li>
                        <p><strong>Тренерский опыт:</strong> более 10 лет</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const about_img = ref(process.env.VITE_API_URL + '/uploads/about_img.png');

</script>

<style scoped>

</style>