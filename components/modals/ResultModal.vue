<template>
    <modal class="modal fade" id="resultModal" @shown="shown">
        <loading class="loading-value" v-if="isLoading"/>
        <form class="form p-3">
            <div class="row">
                <div class="col-4">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput"
                               placeholder="Вес"
                               inputmode="numeric">
                        <label for="floatingInput" :style="{color: 'gray'}">Вес</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingSet"
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

const exercise: any = ref();
const isLoading = ref(false);

function shown(data: any) {
    exercise.value = data;
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