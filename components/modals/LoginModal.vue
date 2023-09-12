<template>
    <modal class="modal fade" id="loginModal" @shown="shown">
        <template #header>
            {{ text }}
        </template>
        <form class="form p-3" @submit.prevent="submit">
            <error-block @close="closeError" class="mb-4" v-if="showError" :text="error" />

            <div class="form-floating mb-3">
                <input v-model="user.email" type="email" class="form-control" id="floatingInput" placeholder="Почта">
                <label for="floatingInput">Почта</label>
            </div>
            <div class="form-floating">
                <input v-model="user.password" type="password" class="form-control" id="floatingSet" placeholder="Пароль">
                <label for="floatingSet">Пароль</label>
            </div>
            <div class="mt-4 cursor-pointer">
                <span @click="changeStrategy">{{ text === 'Войти' ? 'Регестрация' : 'Войти' }}</span>
            </div>
            <button type="submit" class="btn btn-primary button mt-3">Купить</button>
        </form>
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";
import axios from "axios";

const user = ref({ email: '', password: '' });
const text = ref('');
const showError = ref(false);
const error = ref('')

async function submit() {

    if (!user.value.email || !user.value.email) {
        showError.value = true;
        error.value = 'Пожалуйста заполните все поля.';  
    }

    if (text.value === 'Войти') {
        login(user.value.email, user.value.password).then((response: any) => {
            const token = useCookie('token');
            const user = useCookie('user');
            token.value = response.data.token;
            user.value = response.data.user;
            if (response.status === 200 || response.status === 201) {
                window.location.href = import.meta.env.VITE_HOST_URL
            }
        }).catch((e: any) => {
            error.value = 'Пожалуйста перепроверьте почту и пароль.'
            showError.value = true;
        });
        return;
    }
    axios.post(import.meta.env.VITE_API_URL + '/users', user.value).then(r => {
        const token = useCookie('token');
        const user = useCookie('user');
        console.log(r);
        token.value = r.data.token;
        user.value = r.data.user;
        if (r.status === 200 || r.status === 201) {
            window.location.href = import.meta.env.VITE_HOST_URL;
        }
    })
}

function shown(data: any) {
    text.value = data.text
}

function changeStrategy(e: any) {
    text.value = text.value === 'Войти' ? 'Регистрация' : 'Войти'
}

function closeError() {
    showError.value = false;
}

</script>

<style scoped></style>