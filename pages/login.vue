<template>
    <div class="loginBlock">
        <loading v-if="isLoading"/>
        <div class="blur">
            <form class="form p-3">
                <h1 class="mb-4">Войти</h1>
                <error-block @close="closeError" class="mb-4" v-if="showError" :text="error"/>
                <div class="form-floating mb-3">
                    <input v-model="user.phone" type="text" class="form-control" id="floatingInput"
                           placeholder="Номер телефона">
                    <label for="floatingInput">Номер телефона</label>
                </div>
                <div class="form-floating">
                    <input v-model="user.password" type="password" class="form-control" id="floatingSet"
                           placeholder="Пароль">
                    <label for="floatingSet">Пароль</label>
                </div>
                <button type="button" class="redirect-btn"><span>Пока нет аккаунта ?</span>
                    <span @click="navigateTo({path: '/signup'})" class="text-white">Нажмите сюда
                    </span>
                </button>
                <button type="button" @click="submit" class="btn btn-primary button mt-3">Войти</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {login} from "~/utils/auth";

definePageMeta({
    layout: false
});

const user = ref({phone: '', password: ''});
const showError = ref(false);
const error = ref('')
const isLoading = ref(false);

// const url = ref(import.meta.env.VITE_API_URL);

async function submit() {
    isLoading.value = true;
    error.value = ''
    showError.value = false;

    if (!user.value.phone || !user.value.phone) {
        showError.value = true;
        error.value = 'Пожалуйста заполните все поля.';
    }

    const message = login(user.value.phone, user.value.password, isLoading);

    showError.value = message.showError;
    error.value = message.errorMessage;
}

// async function addPurchase(user: any) {
//     const training = await axios.get(`${url.value}/${query.place}/${query.id}`);
//     console.log(training);
// }


function closeError() {
    showError.value = false;
}

</script>

<style scoped></style>