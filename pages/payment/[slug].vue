<template>
    <div class="loginBlock">
        <div class="blur">
            <form method="POST" class="form p-3" action="https://test.paycom.uz">
                <h1 class="mb-4">Оплата</h1>
                <error-block @close="closeError" class="mb-4" v-if="showError" :text="error"/>
                <input type="hidden" name="merchant" value="6512a3ad2918d26924fd13ca"/>
                <input type="hidden" name="amount" :value="doThousand(price)"/>
                <input type="hidden" name="account[model]" :value="model_name"/>
                <input type="hidden" name="account[order_id]" :value="Math.floor(Math.random() * 10000000000)"/>
                <input type="hidden" name="account[user_id]" :value="user._id"/>
                <input type="hidden" name="account[product_id]" :value="product_id"/>
                <button type="submit" class="btn btn-primary button mt-3">Оплатить через Payme</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const showError = ref(false);
const error = ref('');

const product_id = useRoute().params.slug;
const user: any = ref({});
const model_name: any = ref('');
const price = ref();

onMounted(async () => {
    let storage: any = localStorage.getItem('user');
    model_name.value = localStorage.getItem('route');
    price.value = localStorage.getItem('price');
    console.log(price.value);
    user.value = JSON.parse(storage)[0] || {};
});

function closeError() {
    showError.value = false;
}

function doThousand(price: string) {
    price = price + '000';
    return +price;
}

</script>

<style scoped>

</style>