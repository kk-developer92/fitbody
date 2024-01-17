<template>
    <div class="list-group-item info-block b-0 py-2 text-decoration-none">
        <div class="d-flex align-items-center">
            <div class="position-relative mr-3 flex-shrink-0 overlay opacity-hover" data-bs-target="#videoModal"
                 data-bs-toggle="modal" @click="openModal">
                <img class="rounded" width="128" height="72"
                     :src="props.train.image || 'https://avatars.mds.yandex.net/i?id=77ea515802a34056dfa8b2e6bbb6588be2aa6806-5409727-images-thumbs&n=13'"
                     alt="Exercise image">
                <play-button/>
            </div>
            <div class="flex-grow-1 ms-3">
                <div class="row d-flex align-items-center">
                    <div class="col-sm">
                        <h6 class="mb-0 text-white">{{ props.train.title }}</h6>
                        <p class="mb-0">{{ props.train.repEach || 12 }} раз</p>
                    </div>
                    <div class="col-sm-auto flex-shrink-0 d-flex gap-3 align-items-center justify-content-between">
                        <div>
                            <h6 class="mb-0 text-white">Результат:</h6>
                            <div class="results" v-for="rep in reps">
                                <p class="mb-0 small">{{rep}}x{{ props.train?.result[rep] || 0}}раз</p>
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
        <result-modal />
    </div>
</template>

<script lang="ts" setup>

import EditBtn from "~/components/icons/editBtn.vue";
import PlayButton from "~/components/icons/PlayButton.vue";
import {useModal} from "~/composables/useModal";
import ResultModal from "~/components/modals/ResultModal.vue";

const props = defineProps<{ train: any }>()

const modal = useModal('videoModal');
const resmodal = useModal('resultModal');
const reps = ref(+props.train.repEach.split('x')[0]);

function openModal() {
    modal.open(props.train.video)
}

function openResModal() {
    resmodal.open(props.train);
}


</script>

<style scoped></style>