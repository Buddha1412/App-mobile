<template>
    <div class="text-form">
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    text: String, // Accept the text prop
});
</script>

<style>
.text-form {
    font-size: 20px;
    color: white;
}
</style>