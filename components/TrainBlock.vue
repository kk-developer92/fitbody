<template>
    <div class="card border-0 mb-3 shadow">
        <div class="card-body border-bottom">
        </div>
        <div class="list-group list-group-flush">
            <info-block v-for="train in props.data.exercises" :train="train" :dayId="props.data._id"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import InfoBlock from "~/components/infoBlock.vue";
const props = defineProps<{ data: any }>();


</script>

<style scoped>

</style>