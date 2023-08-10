<template>
    <modal class="modal fade" id="loginModal" @shown="shown">
        <form class="form p-3" @submit.prevent="submit">
            <div class="form-floating mb-3">
                <input v-model="user.email" type="email" class="form-control" id="floatingInput" placeholder="Почта">
                <label for="floatingInput">Почта</label>
            </div>
            <div class="form-floating">
                <input v-model="user.password" type="password" class="form-control" id="floatingSet"
                       placeholder="Пароль">
                <label for="floatingSet">Пароль</label>
            </div>
            <button type="submit" class="btn btn-primary button mt-3">Зарегистрироваться</button>
        </form>
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";
import axios from "axios";

const user = ref({password: '', email: ''});

async function submit() {

    try {
        let fm = new FormData();
        fm.append('username', user.value.email)
        fm.append('password', user.value.password)

        // await axios.post(`${import.meta.env.VITE_API_URL}/register`, user.value);
        const a = await fetch(`http://127.0.0.1:8000/login`, {
            method: 'POST',
            body: fm
        });
        console.log(a)
    } catch (e) {
    }
}

function shown(data: any) {
}

</script>

<style scoped></style>