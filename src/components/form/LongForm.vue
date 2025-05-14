<template>
    <div class="long-form">
        <input
            :placeholder="placeholder"
            :value="modalValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >        
    </div>
</template>

<script setup>
import { defineProps} from 'vue';
 defineProps({
    placeholder: String,
    modelValue: String
 })
</script>

<style>
    .long-form {
       
        border-radius: 10px;
        border: 1px solid #ffffff;
        padding: 10px 180px 10px 15px;
        background-color: white;
    }

    .long-form input {
        border: none;
        font-size: 25px;
    }

    input:focus {
        outline: none; 
        border: none;
        box-shadow: none; 
    }
</style>