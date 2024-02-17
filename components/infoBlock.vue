<template>
    <div class="list-group-item info-block b-0 py-2 text-decoration-none">
        <div class="d-flex align-items-center">
            <div class="position-relative mr-3 flex-shrink-0 overlay opacity-hover" data-bs-target="#videoModal"
                 data-bs-toggle="modal" @click="openModal">
                <img class="rounded image" width="128" height="72"
                     :src="exercise.image"
                     alt="Exercise image">
                <play-button/>
            </div>
            <div class="flex-grow-1 ms-3">
                <div class="row d-flex align-items-center">
                    <div class="col-sm">
                        <h6 class="mb-0 text-white">{{ exercise.name }}</h6>
                        <p class="mb-0">{{ exercise.reps }} раз</p>
                    </div>
                    <div class="col-sm-auto flex-shrink-0 d-flex gap-3 align-items-center justify-content-between">
                        <div>
                            <h6 class="mb-0 text-white">Результат:</h6>
                            <div class="results" v-for="rep in exercise.results">
                                <p v-if="+rep.weight > 0 || +rep.reps > 0" class="mb-0 small">{{ rep.weight }} кг -
                                    {{ rep.reps }} раз</p>
                            </div>
                        </div>
                        <button data-bs-target="#resultModal" data-bs-toggle="modal" @click="openResModal"
                                class="btn btn-link p-0 text-danger">
                            <edit-btn/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <result-modal @fetch="fetch" :dayId="props.dayId"/>
    </div>
</template>

<script lang="ts" setup>

import EditBtn from "~/components/icons/editBtn.vue";
import PlayButton from "~/components/icons/PlayButton.vue";
import {useModal} from "~/composables/useModal";
import ResultModal from "~/components/modals/ResultModal.vue";
import {parseJwt} from "~/utils/auth";

const props = defineProps<{ train: any, dayId: string }>();

const modal = useModal('videoModal');
const resModal = useModal('resultModal');
const exercise = ref(props.train);
const route = useRoute().params;
const service = useRoute().fullPath.split('/')[1];
const cookie: any = useCookie('token').value;
const token = parseJwt(cookie);


async function fetch() {
    const exercises = await useService('exercises').get(exercise.value.exerciseId);
    const res = await useService('rpc').create({
        method: 'GetResults',
        data: {
            service: useRoute().fullPath.split('/')[1],
            courseId: useRoute().params.slug,
            dayId: props.dayId,
            exerciseId: exercise.value.uniqueId
        }
    });
    exercise.value = {...exercise.value, ...exercises.data};
    exercise.value.results = res.data;
}

fetch();

function openModal() {
    modal.open(exercise.value.video);
}

function openResModal() {
    resModal.open(props.train);
}

</script>

<style scoped>
.image {
    object-fit: cover;
}
</style>