<template>
    <input ref="imageUploader" accept=".png, .jpeg, .jpg, .webp" type="file" @change="uploadFile"
           @click="$event.target.value=''">
</template>

<script lang="ts" setup>
import axios from "axios";

const emit = defineEmits(['update:modelValue', 'fileUpload', 'reject', 'fileChange']);
const imageUploader = ref<string | null>(null);

function updateValue(image: any) {
    emit('update:modelValue', image._id);
    emit('fileUpload', image);
}

async function uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files)
        return;
    const file = target.files[0];
    emit('fileChange', file);
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > 5) {
        emit('reject', {type: 'entity.too.large'});
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const uri = await new Promise((resolve) => {
        reader.addEventListener("load", () => resolve(reader.result), false);
    });
    const upload = await axios.post(import.meta.env.VITE_API_URL + '/uploads', {uri})
        .catch((err: any) => {
            return Promise.reject(err);
        });
    updateValue(upload.file);
}
</script>

<style scoped>

</style>
