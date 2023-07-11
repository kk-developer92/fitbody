<template>
    <ul class="nav nav-tabs tab-gender pt-2 justify-content-center mb-4" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" data-bs-toggle="tab" :data-bs-target="'#' + props.dataTarget.man" type="button"
                    role="tab" aria-selected="true">Для мужчин
            </button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" data-bs-toggle="tab" :data-bs-target="'#' + props.dataTarget.woman" type="button"
                    role="tab"
                    aria-selected="false">Для женщин
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
const props = defineProps<{ dataTarget: { man: string, woman: string } }>()

</script>

<style scoped>
</style>