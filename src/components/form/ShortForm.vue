<template>
  <div class="short-form">
    <button
      :class="{ active: isActive }"
      @click="select"
      type="button"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
const props = defineProps({ text: String, value: String });
const emit = defineEmits(['update:modelValue']);

const isActive = ref(false);

function select() {
  emit('update:modelValue', props.value);
}
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

    .short-form button:hover {
        background-color: rgb(255, 183, 0);
        padding: 10px 18px 10px 18px;
        border: 1px solid rgb(255, 183, 0);
        border-radius: 10px;
        font-size: 25px;
        color: rgb(207, 51, 51);
    }
</style>