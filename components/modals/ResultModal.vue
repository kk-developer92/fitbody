<template>
    <modal class="modal fade" id="resultModal" @shown="shown">
        <form class="form p-3" @submit.prevent="submit">
            <div class="row" v-for="result in reps">
                <div class="col-4">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Вес"
                               inputmode="numeric">
                        <label for="floatingInput" :style="{color: 'gray'}">Вес</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingSet" v-model="exact.result[result]"
                               placeholder="Подходы"
                               inputmode="numeric">
                        <label for="floatingSet" :style="{color: 'gray'}">Повторения</label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary button mt-3">сохранить</button>
        </form>
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";
import axios from "axios";

const result: any = ref();
const URL = import.meta.env.VITE_API_URL;
const id = useRoute().params.id;
const slug = useRoute().params.slug;
const path = useRoute().fullPath.split('/')[1];
const training: any = ref({});
const exercise: any = ref({});
const exact: any = ref({});
const reps = ref(0);
const user: any = ref({});

function shown(data: any) {
    result.value = data;
    getExercise();
    reps.value = +exact.value.repEach.split('x')[0]
}

const cookie: any = useCookie('token');

async function fetch() {

    if (cookie.value) {
        const token: any = parseJwt(cookie.value);
        try {
            const usr = await axios.get(URL + '/users/' + token._id);
            user.value = usr.data;
        } catch (e) {
            user.value = {};
        }
        for (let i of user.value[path]) {
            if (i._id === slug) {
                training.value = i;
                getDay();
            }
        }
    }
}

fetch();

function getDay() {
    for (let week of training.value.exercises) {
        for (let day of week.data) {
            if (day._id === id) {
                exercise.value = day
            }
        }
    }
}

function getExercise() {
    for (let i of exercise.value.trainings) {
        for (let exercises of i.exercises) {
            if (result.value._id === exercises._id) {
                exact.value = exercises
                exact.value.result = {};
            }
        }
    }
}


async function submit() {
    if (cookie.value) {
        const token: any = parseJwt(cookie.value);
        await axios.patch(`${URL}/users/${token._id}`, user.value);
    }
}

</script>

<style scoped></style>