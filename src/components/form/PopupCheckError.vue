<template>
  <div v-if="showError" class="popup-overlay">
    <div class="popup">
      <h3>Form Errors</h3>
      <ul>
        <li v-for="(msg, idx) in errorMessages" :key="idx">{{ msg }}</li>
      </ul>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        showError: Boolean,
        errorMessages: Array
    })
</script>

<style>

</style>