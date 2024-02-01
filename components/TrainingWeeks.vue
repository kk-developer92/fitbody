<template>
    <div class="card border-0 mb-3 shadow trainings">
        <div class="accordion accordion-flush faq__accordion" id="accordionFaq">
            <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#' + props.data._id" aria-expanded="false">
                    <h5 class="card-title mb-0 p-1">{{ props.data.name }}</h5>
                </button>
                <div :id="props.data._id" class="accordion-collapse collapse"
                     data-bs-parent="#accordionFaq">
                    <training-days v-for="day in props.data.data" :day="day"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps<{ data: any }>()

</script>

<style scoped>
.accordion-item {
    border-radius: 7px;
}
</style>