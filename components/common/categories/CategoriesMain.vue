<template>
    <div class="container py-3">
        <div class="categories__wrapper row gy-4">
            <category-block v-for="category in categories" :category="category"></category-block>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CategoryBlock from "~/components/common/categories/CategoryBlock.vue";


const categories = ref([
    {
        title: '<h3 class="categories__title">Выбрать <br> тренировки</h3>',
        descr: 'Программы',
        path: '/trainings',
        icon: '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                      d="M34.9414 18.466L41.5316 25.0562L25.0543 41.5336L18.4641 34.9433L34.9414 18.466Z"\n' +
            '                      stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                      d="M9.56876 27.3637C9.93273 26.9998 10.5228 26.9998 10.8868 27.3637L32.6363 49.1133C33.0003 49.4772 33.0003 50.0674 32.6363 50.4313L29.0117 54.056C28.6477 54.4199 28.0576 54.4199 27.6937 54.056L5.94413 32.3064C5.58016 31.9424 5.58016 31.3523 5.94413 30.9884L9.56876 27.3637Z"\n' +
            '                      stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                      d="M9.56876 37.2513C9.93273 36.8873 10.5228 36.8873 10.8868 37.2513L22.751 49.1155C23.115 49.4794 23.115 50.0695 22.751 50.4335L19.1264 54.0581C18.7624 54.4221 18.1723 54.4221 17.8083 54.0581L5.94413 42.194C5.58016 41.83 5.58016 41.2399 5.94413 40.8759L9.56876 37.2513Z"\n' +
            '                      stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                      d="M50.4305 32.6381C50.0665 33.0021 49.4764 33.0021 49.1125 32.6381L27.3629 10.8886C26.999 10.5246 26.999 9.93448 27.3629 9.57051L30.9875 5.94588C31.3515 5.58191 31.9416 5.58191 32.3056 5.94588L54.0551 27.6954C54.4191 28.0594 54.4191 28.6495 54.0551 29.0135L50.4305 32.6381Z"\n' +
            '                      stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '                <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                      d="M50.4305 22.7486C50.0665 23.1125 49.4764 23.1125 49.1125 22.7486L37.2483 10.8844C36.8843 10.5204 36.8843 9.9303 37.2483 9.56633L40.8729 5.9417C41.2369 5.57773 41.827 5.57773 42.1909 5.9417L54.0551 17.8059C54.4191 18.1699 54.4191 18.76 54.0551 19.1239L50.4305 22.7486Z"\n' +
            '                      stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '            </svg>'
    },
    {
        title: '<h3 class="categories__title">Выбрать <br> питание</h3>',
        descr: 'Планы',
        path: '/nutritions',
        icon: '<svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '              d="M8.65537 51.2736L9.64149 51.9311C11.1762 52.9542 12.9794 53.5001 14.8238 53.5001H39.1663C41.0108 53.5001 42.814 52.9542 44.3486 51.931L45.3348 51.2735C47.9339 49.5409 49.4951 46.6238 49.4951 43.5001V43.5001C49.4951 42.1194 48.3758 41.0001 46.9951 41.0001H6.99512C5.61441 41.0001 4.49512 42.1194 4.49512 43.5001V43.5001C4.49512 46.6238 6.05626 49.5409 8.65537 51.2736V51.2736Z"\n' +
            '              stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '        <path\n' +
            '                d="M46.5048 41C46.8226 38.5849 45.478 36.2575 43.227 35.3265L43.1137 35.2797C41.7935 34.7336 40.7447 33.6849 40.1987 32.3647L40.1515 32.2507C39.2206 30.0001 36.8937 28.6557 34.479 28.9734L34.348 28.9907C32.9297 29.1773 31.4953 28.7927 30.3605 27.9214L30.2705 27.8523C28.339 26.3692 25.6518 26.3692 23.7202 27.8523L23.6183 27.9305C22.4874 28.7989 21.0577 29.1822 19.644 28.9962L19.509 28.9784C17.094 28.6606 14.7669 30.006 13.8374 32.2575L13.7921 32.3672C13.2464 33.6891 12.1964 34.739 10.8746 35.2847L10.7649 35.33C8.51333 36.2595 7.16791 38.5865 7.48567 41.0016"\n' +
            '                stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '        <path\n' +
            '                d="M15.6497 29.95L5.59968 19.9C4.64946 18.954 4.27707 17.5723 4.62317 16.2769C4.96926 14.9815 5.9811 13.9696 7.27654 13.6235C8.57198 13.2774 9.95363 13.6498 10.8997 14.6L23.9747 27.675"\n' +
            '                stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '        <path\n' +
            '                d="M56.5005 22.7501H21.5195M41.501 34V23.1667C41.501 22.0848 41.8519 21.0322 42.501 20.1667L49.001 11.5M49.001 11.5L55.5 20.1667C56.1491 21.0322 56.5 22.0848 56.5 23.1667V48.5C56.5 51.2614 54.2614 53.5 51.5 53.5H39M49.001 11.5L49 6.5C49 5.11929 47.8807 4 46.5 4H31.5C30.1193 4 29 5.11929 29 6.5V11.5M29 11.5L22.5 20.1667C21.8509 21.0322 21.5 22.0848 21.5 23.1667V24.0833M29 11.5L48.999 11.4999"\n' +
            '                stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '    </svg>'
    },
    {
        title: '<h3 class="categories__title">Выбрать <br> курсы</h3>',
        descr: 'Обучение',
        path: '/courses',
        icon: '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                        <path\n' +
            '                                d="M47.501 12.5H50.001C52.7635 12.5 55.001 14.7375 55.001 17.5V47.5C55.001 50.2625 52.7635 52.5 50.001 52.5H10.001C7.23848 52.5 5.00098 50.2625 5.00098 47.5V17.5C5.00098 14.7375 7.23848 12.5 10.001 12.5H12.501"\n' +
            '                                stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '                        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                              d="M30.001 15C30.001 10.8575 26.6435 7.5 22.501 7.5H15.001C13.621 7.5 12.501 8.62 12.501 10V42.5C12.501 43.88 13.621 45 15.001 45H22.501C26.6435 45 30.001 48.3575 30.001 52.5C30.001 48.3575 33.3585 45 37.501 45H45.001C46.381 45 47.501 43.88 47.501 42.5V10C47.501 8.62 46.381 7.5 45.001 7.5H37.501C33.3585 7.5 30.001 10.8575 30.001 15Z"\n' +
            '                              stroke="#F52626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '                        <path d="M30.0005 15V52.5" stroke="#F52626" stroke-width="3" stroke-linecap="round"\n' +
            '                              stroke-linejoin="round"/>\n' +
            '                    </svg>'
    }
])
</script>

<style scoped>

</style>