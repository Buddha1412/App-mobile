<template>
    <div class="form-container">
        <div class="information-form">
            <div><LongForm v-model="message" placeholder="Firstname"/></div>
            <div><LongForm v-model="message" placeholder="Lastname"/></div>
            <div><LongForm v-model="message" placeholder="Phone Number"/></div>
            <div><LongForm v-model="message" placeholder="Email"/></div>
        </div>

        <div class="sex-form">
            <div><ShortForm v-model="message" text="Male"/></div>
            <div><ShortForm v-model="message" text="Female"/></div>
            <div><ShortForm v-model="message" text="Unisex"/></div>
        </div>

        <div class="address-form">
            <div><LongForm v-model="message" text="Address"/></div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import LongForm from './components/form/LongForm.vue'
import ShortForm from './components/form/ShortForm.vue'

const message = ref('')

</script>

<style>
    body {
        background-color: rgb(207, 51, 51);
        margin: 0;
        padding: 0; 
    }

    .form-container {
        width: 80%;
        margin: 0 auto;
    }

    .information-form div {
        margin: 25px auto;
    }

    .sex-form {
        margin: 25px auto;
    }

    .sex-form {
        display: flex;
        justify-content: space-between;
    }
</style>
