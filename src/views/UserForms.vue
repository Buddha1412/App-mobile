<template>

    <div class="form-container">

        <div class="form-title"><h2>member information</h2></div>

        <div class="information-form">
            <div><TextForm text="Firstname"/></div>
            <div>
                <LongForm 
                    v-model="customer.firstname" 
                    placeholder="Firstname" 
                    icon="account_circle" 
                    type="text"
                    pattern="^[A-Za-z]{2,}$"
                />
            </div>
            <div>
                <TextForm text="Lastname"/>
            </div>
            <div>
                <LongForm 
                    v-model="customer.lastname" 
                    placeholder="Lastname" 
                    icon="account_circle" 
                    type="text"
                    pattern="^[A-Za-z]{2,}$"
                />
            </div>
            <div>
                <TextForm text="Phone"/>
            </div>
            <div>
                <LongForm 
                    v-model="phone" 
                    placeholder="Phone Number" 
                    icon="call" 
                    type="tel"
                    pattern="^[0-9]{10}$"
                />
            </div>
            <div>
                <TextForm text="Email"/>
            </div>
            <div>
                <LongForm 
                    v-model="customer.email" 
                    placeholder="Email" 
                    icon="email" 
                    type="email"
                    pattern="\d{4}-\d{2}-\d{2} ([01]\d|2[0-3]):([0-5]\d)"
                />
            </div>
        </div>

        <div><TextForm text="Date"/></div>
        <DatePicker 
            v-model="customer.date" 
            class="custom-date-picker" 
            type="text"
            pattern="/^\d{4}-\d{2}-\d{2} ([01]\d|2[0-3]):([0-5]\d)$/"
        />

        <div><TextForm text="Sex"/></div>
        <div class="sex-form">
            <div><ShortForm v-model="selectedSex" text="Male" value='male'/></div>
            <div><ShortForm v-model="selectedSex" text="Female" value='female'/></div>
            <div><ShortForm v-model="selectedSex" text="Unisex" value='unisex'/></div>
        </div>

        <div><TextForm text="Address"/></div>
        <div class="address-form">
            <div>
                <LongForm 
                    v-model="customer.address" 
                    placeholder="Address" 
                    icon="home"
                    type="text"
                    
                />
            </div>
        </div>

        <div><MediumForm/></div>

        <div><LongButton text="Next" @click="handleClick"/></div>
        
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue'
import LongForm from '../components/form/LongForm.vue'
import MediumForm from '../components/form/MediumForm.vue'
import ShortForm from '../components/form/ShortForm.vue'
import LongButton from '../components/form/LongButton.vue'
import DatePicker from '@vuepic/vue-datepicker'
import TextForm from '../components/form/TextForm.vue'
import { useRouter } from 'vue-router'

const customer = reactive({
    firstname : '',
    lastname : '',
    date : '',
    email : '',
    phone : '',
    address : ''
})

const selectedSex = ref('');

const router = useRouter();

function handleClick() {
    const errors = [];

    const namePattern = /^[A-Za-z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateTimePattern = /^\d{4}-\d{2}-\d{2} ([01]\d|2[0-3]):([0-5]\d)$/;
    const addressPattern = /^[\w\s.,-]{5,}$/;

    if (!namePattern.test(customer.firstname)) {
        errors.push('Please enter a valid firstname (letters only, at least 2 characters).');
    }
    if (!namePattern.test(customer.lastname)) {
        errors.push('Please enter a valid lastname (letters only, at least 2 characters).');
    }
    if (!phonePattern.test(customer.phone)) {
        errors.push('Please enter a valid 10-digit phone number.');
    }
    if (!emailPattern.test(customer.email)) {
        errors.push('Please enter a valid email address.');
    }
    if (!dateTimePattern.test(customer.date)) {
        errors.push('Please enter a valid date.');
    }
    if (!addressPattern.test(customer.address)) {
        errors.push('Please enter a valid home address.');
    }
    if (!selectedSex.value) {
        alert('Please select a sex.');
        return;
    }
    if (errors.length > 1) {
        alert(errors.join('\n'));
        return;
    }

    router.push('/homepage');
}

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
