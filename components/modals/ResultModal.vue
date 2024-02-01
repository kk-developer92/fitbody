<template>
    <modal class="modal fade" id="resultModal" @shown="shown">
        <loading class="loading-value" v-if="isLoading"/>
        <form class="form p-3" @submit.prevent="submit">
            <div class="row" v-for="res in results">
                <div class="col-4">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput"
                               placeholder="Вес"
                               v-model="res.weight"
                               inputmode="numeric">
                        <label for="floatingInput" :style="{color: 'gray'}">Вес</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingSet"
                               placeholder="Подходы"
                               v-model="res.reps"
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

const exercise: any = ref();
const isLoading = ref(false);
const results: any = ref([]);
const props = defineProps<{ dayId: string }>()
const emit = defineEmits(['fetch']);

function shown(data: any) {
    exercise.value = data;
    countResult();
}

async function countResult() {
    const res = await useService('rpc').create({
        method: 'GetResults',
        data: {
            service: useRoute().fullPath.split('/')[1],
            exerciseId: exercise.value.uniqueId,
        }
    });

    if (res.data?.length) {
        results.value = res.data;
        return;
    }

    if (exercise.value.reps) {
        const reps = Number(exercise.value.reps.split('x')[0]);
        results.value = [];
        for (let i = 1; i <= reps; i++) {
            results.value.push({weight: "0", reps: "0"});
        }
    }
}

async function submit() {
    isLoading.value = true;
    await useService('rpc').create({
        method: 'SetResults',
        data: {
            service: useRoute().fullPath.split('/')[1],
            exerciseId: exercise.value.uniqueId,
            results: results.value,
        }
    });

    isLoading.value = false;
    reloadNuxtApp({force: true});
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