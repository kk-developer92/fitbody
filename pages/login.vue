<template>
    <div class="loginBlock">
        <div class="blur">
            <form class="form p-3" @submit.prevent="submit">
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
                    <span @click="navigateTo({
                        path: '/signup',
                        query
                    })" class="text-white">Нажмите сюда
                    </span>
                </button>
                <button type="submit" class="btn btn-primary button mt-3">Войти</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";

const user = ref({phone: '', password: ''});
const showError = ref(false);
const error = ref('')

const query = useRoute().query;

if (!query.id) {
    navigateTo('/');
}

async function submit() {
    error.value = ''
    showError.value = false;
    if (!user.value.phone || !user.value.phone) {
        showError.value = true;
        error.value = 'Пожалуйста заполните все поля.';
    }

    login(user.value.phone, user.value.password).then(async (response: any) => {
        const token = useCookie('token');
        token.value = response.data.token;
        if (response.data.message === 'Incorrect password') {
            error.value = 'Пожалуйста перепроверьте номер и пароль.'
            showError.value = true;
            return;
        }
        localStorage.setItem('user', JSON.stringify(response.data.user));
        await addPurchase(response.data.user);
        if (response.status === 200 || response.status === 201) {
            window.location.href = import.meta.env.VITE_HOST_URL;
        }
    }).catch((e: any) => {
        error.value = 'Пожалуйста перепроверьте номер и пароль.'
        showError.value = true;
    });
}

async function addPurchase(user: any) {
    const purchased = await axios.get(import.meta.env.VITE_API_URL + `/${query.place}/${query.id}`);
    // @ts-ignore
    const trainings = [...user[query.place], purchased.data];
    // @ts-ignore
    await axios.patch(import.meta.env.VITE_API_URL + `/users/${user._id}`, {[query.place]: trainings});
    const usr = await axios.get(import.meta.env.VITE_API_URL + `/users/${user._id}`);
    localStorage.setItem('user', JSON.stringify(usr.data));
}


function closeError() {
    showError.value = false;
}

</script>

<style scoped></style>