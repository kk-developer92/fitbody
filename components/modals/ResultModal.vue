<template>
    <modal class="modal fade" id="resultModal" @shown="shown">
        <loading class="loading-value" v-if="isLoading"/>
        <form class="form p-3" @submit.prevent="submit">
            <div class="row" v-for="res in results">
                <div class="col-4">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput"
                               placeholder="0"
                               v-model="res.weight"
                               inputmode="numeric">
                        <label for="floatingInput" :style="{color: 'gray'}">Вес</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingSet"
                               placeholder="0"
                               v-model="res.reps"
                               inputmode="numeric">
                        <label for="floatingSet" :style="{color: 'gray'}">Повторения</label>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary button mt-3">сохранить</button>
        </form>
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";

const exercise: any = ref();
const isLoading = ref(false);
const results: any = ref([]);
const props = defineProps<{ dayId: string }>()

function shown(data: any) {
    exercise.value = data;
    countResult();
    if (!exercise.value.results?.message) {
        results.value = exercise.value.results;
    }
}

async function countResult() {
    if (exercise.value.reps) {
        if (exercise.value.reps.includes('х')) {
            exercise.value.reps = exercise.value.reps.replace('х', 'x');
        }
        const reps = Number(exercise.value.reps.split('x')[0]);
        results.value = [];
        for (let i = 1; i <= reps; i++) {
            results.value.push({weight: "", reps: ""});
        }
    }
}

async function submit() {
    isLoading.value = true;
    try {
        await useService('rpc').create({
            method: 'SetResults',
            data: {
                service: useRoute().fullPath.split('/')[1],
                exerciseId: exercise.value.uniqueId,
                results: results.value,
            }
        });
        reloadNuxtApp({force: true});
    } catch (e) {
        console.log(e);
    } finally {
        isLoading.value = false;
    }
}

</script>

<style scoped>
.loading-value {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
}
</style>