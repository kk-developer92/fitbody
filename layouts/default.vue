<template>
    <div>
        <span class="d-none">
            {{ useCookie('route').value = useRoute().path }}
        </span>
        <client-only>
            <navbar/>
        </client-only>
        <slot></slot>
        <footer-component></footer-component>
    </div>
</template>

<script lang="ts" setup>
</script>

<style>

</style>