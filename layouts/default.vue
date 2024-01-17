<template>
    <div>
        <span class="d-none">
            {{ useCookie('route').value = useRoute().path }}
        </span>
        <render-cacheable :cache-tags="['navbar']">
            <navbar/>
        </render-cacheable>
        <slot></slot>
        <footer-component></footer-component>
    </div>
</template>

<script lang="ts" setup>
</script>

<style>

</style>