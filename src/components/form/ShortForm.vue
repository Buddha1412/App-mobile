<template>
    <div class="short-form">
        <button
            :class="{ active: isActive }"
            @onclick="toggle"
        >
            {{ isActive ? activeText : text }}
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps} from 'vue';
 defineProps({
    text: String,
    activeText: String,
 })

const isActive = ref(false);

function toggle() {
    isActive.value = !isActive.value;
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
        border: 1px solid rgb(255, 183, 0);
        color: rgb(207, 51, 51);
    }

    .short-form button:active {
        background-color: rgb(255, 183, 0);
        border: 1px solid rgb(255, 183, 0);
        color: rgb(207, 51, 51);
    }
</style>