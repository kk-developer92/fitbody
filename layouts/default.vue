<template>
    <div>
        <span class="d-none">
            {{ useCookie('route').value = useRoute().path }}
        </span>
        <navbar/>
        <slot></slot>
        <footer-component id="footerComponent"></footer-component>
    </div>
</template>

<script lang="ts" setup>
</script>

<style>

</style>