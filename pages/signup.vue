<template>
    <div class="loginBlock">
        <div class="blur">
            <loading v-if="isLoading"/>
            <form class="form p-3" @submit.prevent="submit" autocomplete="off">
                <h1 class="mb-4">Регистрация</h1>
                <error-block @close="closeError" class="mb-4" v-if="showError" :text="error"/>
                <div class="form-floating mb-3">
                    <input  autocomplete="off" v-model="user.name" type="text" class="form-control" id="floatingInput"
                           placeholder="Имя">
                    <label for="floatingInput">Имя</label>
                </div>
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
                <button type="button" class="redirect-btn"><span>Уже есть аккаунт ?</span>
                    <span class="text-white" @click="navigateTo({path: '/signup'})">Нажмите сюда
                    </span>
                </button>
                <button type="submit" class="btn btn-primary button mt-3">Зарегестрироваться</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {signup} from "~/utils/auth";

definePageMeta({
    layout: false
});

const user = ref({phone: '', password: '', name: ''});
const showError = ref(false);
const error = ref('');
const isLoading = ref(false);

async function submit() {
    isLoading.value = true;
    error.value = ''
    showError.value = false;

    if (!user.value.phone || !user.value.phone || !user.value.name) {
        showError.value = true;
        error.value = 'Пожалуйста заполните все поля.';
    }

    signup(user.value.phone, user.value.password, user.value.name, isLoading)
        .catch((e) => {
            console.log(e);
            error.value = 'Пожалуйста перепроверьте номер и пароль.'
            showError.value = true;
            isLoading.value = false;
        });
}

function closeError() {
    showError.value = false;
}

</script>

<style scoped></style>