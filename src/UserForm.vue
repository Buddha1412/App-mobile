<template>
    <div class="form-container">
        <div class="information-form">
            <div><LongForm v-model="firstname" placeholder="Firstname" icon="account_circle"/></div>
            <div><LongForm v-model="lastname" placeholder="Lastname" icon="account_circle"/></div>
            <div><LongForm v-model="phone" placeholder="Phone Number" icon="call"/></div>
            <div><LongForm v-model="email" placeholder="Email" icon=""/></div>
        </div>

        <div class="sex-form">
            <div><ShortForm v-model="message" text="Male"/></div>
            <div><ShortForm v-model="message" text="Female"/></div>
            <div><ShortForm v-model="message" text="Unisex"/></div>
        </div>

        <div class="address-form">
            <div><LongForm v-model="message" text="Address"/></div>
        </div>

        <div><MediumForm/></div>

        <div><LongButton v-model="message" text="Next"/></div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import LongForm from './components/form/LongForm.vue'
import MediumForm from './components/form/MediumForm.vue'
import ShortForm from './components/form/ShortForm.vue'
import LongButton from './components/form/LongButton.vue'

const firstname = ref('')
const lastname = ref('')
const phone = ref('')
const email = ref('')

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
