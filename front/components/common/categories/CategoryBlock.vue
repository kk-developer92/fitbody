<template>
    <div class="col-lg-4">
        <nuxt-link :to="category.path" class="categories__item">
            <div>
                <div v-html="category.title"></div>
                <p>{{ category.descr }}</p>
            </div>
            <div v-html="category.icon"></div>
        </nuxt-link>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ category: any }>()
</script>

<style scoped>

</style>