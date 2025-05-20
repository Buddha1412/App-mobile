<template>
  <div class="long-form">
    <span v-if="icon" class="material-symbols-outlined">{{ icon }}</span>
    <input
      :placeholder="placeholder"
      :value="modelValue || ''"
      :type="type"
      @input="onInput"
      :class="{'input-error': error}"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  placeholder: String,
  modelValue: String,
  icon: String,
  type: {
    type: String,
    default: 'text',
  },
  error: {
    type: Boolean,
    default: false,
  }
});


const emit = defineEmits(['update:modelValue']);

// const isEmailValid = computed(() => {
//     if (props.type !== 'email') return true;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(props.modalValue || '');
// });

function onInput(event) {
    emit('update:modelValue', event.target.value);
}

</script>

<style scoped>
    .long-form {
        border-radius: 10px;
        border: 1px solid #ffffff;
        padding: 10px 180px 10px 15px;
        background-color: white;
        display: flex;
        overflow: hidden;
    }

    .long-form span {
        margin: 0px 10px 5px 0px;
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

    .material-symbols-outlined {
        font-family: 'Material Symbols Outlined';
        font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        font-size: 28px;
    }

    .long-form input.input-error {
        color: red !important;
    }
</style>