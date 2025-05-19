<template>

    <div class="form-container">

        <div class="form-title"><h2>member information</h2></div>

        <div class="information-form">
            <div><TextForm text="Firstname"/></div>
            <div><LongForm v-model="customer.firstname" placeholder="Firstname" icon="account_circle"/></div>
            <div><TextForm text="Lastname"/></div>
            <div><LongForm v-model="customer.lastname" placeholder="Lastname" icon="account_circle"/></div>
            <div><TextForm text="Phone"/></div>
            <div><LongForm v-model="customer.phone" placeholder="Phone Number" icon="call"/></div>
            <div><TextForm text="Email"/></div>
            <div><LongForm v-model="customer.email" placeholder="Email" icon="email"/></div>
        </div>

        <div><TextForm text="Date"/></div>
        <DatePicker v-model="customer.date" class="custom-date-picker" />

        <div><TextForm text="Sex"/></div>
        <div class="sex-form">
            <div><ShortForm v-model="sex.male" text="Male"/></div>
            <div><ShortForm v-model="sex.female" text="Female"/></div>
            <div><ShortForm v-model="sex.unisex" text="Unisex"/></div>
        </div>

        <div><TextForm text="Address"/></div>
        <div class="address-form">
            <div><LongForm v-model="customer.address" placeholder="Address" icon="home"/></div>
        </div>

        <div><MediumForm/></div>

        <div><LongButton text="Next"/></div>
        
    </div>
</template>

<script setup>

import { reactive } from 'vue'
import LongForm from '../components/form/LongForm.vue'
import MediumForm from '../components/form/MediumForm.vue'
import ShortForm from '../components/form/ShortForm.vue'
import LongButton from '../components/form/LongButton.vue'
import DatePicker from '@vuepic/vue-datepicker'
import TextForm from '../components/form/TextForm.vue'

const customer = reactive({
    name : String,
    lastname : String,
    date : String,
    email : String,
    phone : String,
    address : String
})

const sex = reactive({
    male : String,
    female : String,
    unisex : String,
})

</script>

<style>
    body {
        margin: 50px 0px 50px 00px;
        padding: 0; 
    }

    .form-container {
        width: 80%;
        margin: 0 auto;
    }

    .sex-form {
        margin: 25px auto;
    }

    .sex-form {
        display: flex;
        justify-content: space-between;
    }

    .form-title h2 {
        display: flex;
        align-content: center;
        justify-content: center;
        color: rgb(255, 183, 0);
    }
</style>
