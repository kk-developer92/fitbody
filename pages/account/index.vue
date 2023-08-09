<template>
  <h1>Auth route</h1>
</template>

<script lang="ts" setup>
definePageMeta({
    authRoute: true,
    middleware: 'auth'
})
</script>

<style scoped>

</style>