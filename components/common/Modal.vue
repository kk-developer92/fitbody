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

    <!-- <transition name="form">
        <div v-if="open" :id="id" aria-hidden="true"
             class="d-flex align-items-center justify-content-center h-100 overflow-hidden position-fixed top-0 left-0 z-3 w-100 bg-dark bg-opacity-25"
             tabindex="-1">
            <div class="w-full h-full bg-white max-w-5xl md:h-auto">
                <div class="relative rounded-lg shadow h-full">
                    <div class="flex justify-between items-start p-4 rounded-t border-b">
                        <button @click="closeModal" class="btn btn-link">
                            <cross-icon class="text-dark cursor-pointer" />
                        </button>
                    </div>
                    <div class="p-4 overflow-y-auto" style="height: calc(100% - 146px)">
                        <slot></slot>
                    </div>
                    <div class="p-4 rounded-b border-t border-gray-200">
                        <slot name="footer">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition> -->
</template>

<script lang="ts" setup>

import {bus} from "~/constants";
import CrossIcon from "~/components/icons/CrossIcon.vue";

const props = defineProps({id: {type: String, required: true}, title: {type: String}});
const emits = defineEmits(['shown', 'hidden']);
const open = ref(false);

function closeModal() {
    open.value = false;
    emits('hidden');
}

bus.on('modals.open', ({id, data}: any) => {
    if (id === props.id) {
        open.value = true;
        emits('shown', data);
    }
});
bus.on('modals.close', ({id}) => {
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