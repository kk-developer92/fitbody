<template>
    <modal class="modal fade" id="resultModal" @shown="shown">
        <form class="form p-3">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="Вес">
                <label for="floatingInput">Вес</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingPassword" placeholder="Подходы">
                <label for="floatingPassword">Подходы. Например: 12,12,12</label>
            </div>
            <button type="submit" class="btn btn-primary button mt-3">Отправить</button>
        </form>
    </modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/common/Modal.vue";

const result: any = ref();

function shown(data: any) {
    result.value = data
}

</script>

<style scoped></style>