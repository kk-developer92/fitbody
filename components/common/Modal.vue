<template>
    <!-- Modal -->
    <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <slot></slot>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { bus } from "~/constants";

const props = defineProps({ id: { type: String, required: true }, title: { type: String } });
const emits = defineEmits(['shown', 'hidden']);
const open = ref(false);

function closeModal() {
    open.value = false;
    emits('hidden');
}

bus.on('modals.open', ({ id, data }: any) => {
    if (id === props.id) {
        open.value = true;
        emits('shown', data);
    }
});
bus.on('modals.close', ({ id }) => {
    if (id === props.id) {
        closeModal();
    }
});

</script>

<style scoped>
.form-enter-active,
.form-leave-active {
    transition: all 0.25s ease-out;
}

.form-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.form-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.bg-opacity {
    opacity: .5;
}
</style>