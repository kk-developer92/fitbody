<template>
    <div class="card border-0 mb-3 shadow">
        <div class="card-body border-bottom">
            <small class="font-weight-bold text-muted mb-0">Часть 1 - 7
                тренировок</small>
            <h5 class="card-title mb-0">Неделя 1</h5>
        </div>
        <div class="list-group">
            <training-days />
            <training-days />
            <training-days />
            <training-days />
        </div>
    </div>
</template>

<script lang="ts" setup>

import TrainingDays from "~/components/TrainingDays.vue";
</script>

<style scoped>

</style>