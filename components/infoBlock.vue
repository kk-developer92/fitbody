<template>
    <div class="list-group-item info-block b-0 py-2 text-decoration-none">
        <div class="d-flex align-items-center">
            <div class="position-relative mr-3 flex-shrink-0 overlay opacity-hover" data-bs-target="#videoModal"
                data-bs-toggle="modal" @click="openModal">
                <img class="rounded" width="128" height="72"
                    src="https://i.vimeocdn.com/video/1701250328-8d85b1493b149f26c7bb622f0a22dd87a09b447bcfb5d13f0046784fa7299199-d_320x180?r=pad"
                    alt="Exercise image">
                <play-button />
            </div>
            <div class="flex-grow-1 ms-3">
                <div class="row">
                    <div class="col-sm">
                        <h6 class="mb-0 text-white">Low Plank To High Plank
                        </h6>
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


const modal = useModal('videoModal');
const resmodal = useModal('resultModal');

function openModal() {
    modal.open('https://www.youtube.com/embed/dvkozMW37Qc?rel=0')
}

function openResModal() {
    resmodal.open()
}

</script>

<style scoped></style>