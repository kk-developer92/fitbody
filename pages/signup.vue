<template>
    <div class="loginBlock">
        <div class="blur">
            <form class="form p-3" @submit.prevent="submit">
                <h1 class="mb-4">Регестрация</h1>
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
                <button type="submit" class="btn btn-primary button mt-3">Зарегестрироваться</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";

const user = ref({phone: '', password: ''});
const showError = ref(false);
const error = ref('');

async function submit() {
    if (!user.value.phone || !user.value.phone) {
        showError.value = true;
        error.value = 'Пожалуйста заполните все поля.';
    }

    axios.post(import.meta.env.VITE_API_URL + '/users', user.value).then(r => {
        const token = useCookie('token');
        token.value = r.data.token;
        localStorage.setItem('user', JSON.stringify(r.data.user));
        if (r.status === 200 || r.status === 201) {
            window.location.href = import.meta.env.VITE_HOST_URL;
        }
    }).catch((e: any) => {
        error.value = 'Пожалуйста перепроверьте номер и пароль.'
        showError.value = true;
    });
}

function closeError() {
    showError.value = false;
}

</script>

<style scoped></style>