<template>
    <div class="loginBlock">
        <div class="blur">
            <form class="form p-3" @submit.prevent="submit">
                <h1 class="mb-4">Оплата</h1>
                <error-block @close="closeError" class="mb-4" v-if="showError" :text="error"/>
                <button type="submit" class="btn btn-primary button mt-3">Оплатить через Payme</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const showError = ref(false);
const error = ref('')

function closeError() {
    showError.value = false;
}

async function payment() {

}

</script>

<style scoped>

</style>