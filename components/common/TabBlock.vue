<template>
    <div class="col-6 col-md-4">
        <nuxt-link :to="`/${props.route}/` + props.section.id" class="service">
            <!-- <img class="img-fluid" :src="props.section.media.images.full || '/_nuxt/assets/img/services/service_man.jpg'" alt=""> -->
            <nuxt-img class="img-fluid" format="webp" :src="props.section.media.images.full || '/_nuxt/assets/img/services/service_man.jpg'" sizes="sm:100vw md:100vw lg:400px"    />
            
                 <div class="service__wrapper">
                <div>
                    <h3 class="service__title">{{ props.section.title }}</h3>
                    <div class="service__desc" v-if="props.section.short_description">
                        {{ props.section.short_description }}
                    </div>
                </div>
                <svg class="align-self-end" width="30" height="30" viewBox="0 0 30 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#F52626"/>
                    <path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
                          stroke-linejoin="round"/>
                </svg>
            </div>
        </nuxt-link>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ section: any, route: string }>()
</script>

<style scoped>

</style>