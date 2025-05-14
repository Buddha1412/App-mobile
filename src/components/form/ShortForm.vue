<template>
    <div class="short-form">
        <button>{{ text }}</button>
    </div>
</template>

<script setup>
import { defineProps} from 'vue';
 defineProps({
    text: String
 })

</script>

<style>
    .short-form button {
        background-color: white;
        padding: 10px 18px 10px 18px;
        border: 1px solid white;
        border-radius: 10px;
        font-size: 25px;
        color: rgb(118, 118, 118)
    }
</style>