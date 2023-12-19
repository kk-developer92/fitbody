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

async function fetch() {
    const route = useRoute().query;
    model_name.value = route.model_name;
    price.value = route.price;
}

fetch();

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