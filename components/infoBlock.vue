<template>
    <div class="list-group-item info-block b-0 py-2 text-decoration-none">
        <div class="d-flex align-items-center">
            <div class="position-relative mr-3 flex-shrink-0 overlay opacity-hover" data-bs-target="#videoModal"
                data-bs-toggle="modal" @click="openModal">
                <img class="rounded" width="128" height="72"
                    :src="props.train.image"
                    alt="Exercise image">
                <play-button />
            </div>
            <div class="flex-grow-1 ms-3">
                <div class="row">
                    <div class="col-sm">
                        <h6 class="mb-0 text-white">{{ props.train.title }}</h6>
                        <p class="mb-0">7 reps each</p>
                    </div>
                    <div class="col-sm-auto flex-shrink-0 d-flex gap-3 align-items-center justify-content-between">
                        <div>
                            <h6 class="mb-0 text-white">Результат:</h6>
                            <p class="mb-0 small">58x12,12,12</p>
                        </div>
                        <button data-bs-target="#resultModal" data-bs-toggle="modal" @click="openResModal"
                            class="btn btn-link p-0 text-danger">
                            <edit-btn />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import EditBtn from "~/components/icons/editBtn.vue";
import PlayButton from "~/components/icons/PlayButton.vue";
import { useModal } from "~/composables/useModal";

const props = defineProps<{ train: any }>()

const modal = useModal('videoModal');
const resmodal = useModal('resultModal');


function openModal() {
    modal.open(props.train.video)
}

function openResModal() {
    resmodal.open()
}

</script>

<style scoped></style>