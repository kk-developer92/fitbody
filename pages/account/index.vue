<template>
  {{ user }}
</template>

<script lang="ts" setup>
definePageMeta({
    authRoute: true,
    middleware: 'auth'
});

const user: any = useCookie('user').value

</script>

<style scoped>

</style>