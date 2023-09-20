<template>
    <div class="card border-0 mb-3 shadow">
        <div class="card-body border-bottom">
            <small class="font-weight-bold text-muted mb-0">Часть 1 - 7
                тренировок</small>
            <h5 class="card-title mb-0">{{ props.data.name }}</h5>
        </div>
        <div class="list-group">
            <training-days v-for="day in props.data.data" :day="day" />
        </div>
    </div>
</template>

<script lang="ts" setup>

import TrainingDays from "~/components/TrainingDays.vue";

const props = defineProps<{ data: any }>() 
</script>

<style scoped>

</style>