<template>
    <PopupCheckError
        :showError="showError"
        :errorMessages="errorMessages"
        @close="showError = false"
    />
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
                    v-model="customer.phone" 
                    placeholder="Phone Number" 
                    icon="call" 
                    type="tel"
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
            <div><ShortForm :modelValue="selectedSex" @update:modelValue="selectedSex = $event" text="Male" value='male'/></div>
            <div><ShortForm :modelValue="selectedSex" @update:modelValue="selectedSex = $event" text="Female" value='female'/></div>
            <div><ShortForm :modelValue="selectedSex" @update:modelValue="selectedSex = $event" text="Unisex" value='unisex'/></div>
        </div>
        
        {{ selectedSex }}

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
        <div class="sex-form">
            <div><ShortForm :modelValue="selectedSex" @update:modelValue="selectedSex = $event" text="Male" value='male'/></div>
            <div><ShortForm :modelValue="selectedSex" @update:modelValue="selectedSex = $event" text="Female" value='female'/></div>
            <div><ShortForm :modelValue="selectedSex" @update:modelValue="selectedSex = $event" text="Unisex" value='unisex'/></div>
        </div>
        
        <div>
            <MediumForm
                @update:province="customer.province = $event"
                @update:district="customer.district = $event"
                @update:subdistrict="customer.subdistrict = $event"
                @update:postalcode="customer.postalcode = $event"
            />
        </div>

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
import PopupCheckError from '../components/form/PopupCheckError.vue'

const customer = reactive({
    firstname : '',
    lastname : '',
    date : '',
    email : '',
    phone : '',
    address : '',
    province: '',
    district: '',
    subdistrict: '',
    postalcode: ''
})

const selectedSex = ref('');

const router = useRouter();

const errorMessages = ref([])
const showError = ref(false)

function handleClick() {
    const errors = [];

    const namePattern = /^[A-Za-z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const addressPattern = /^[\w\s.,-/]{5,}$/;

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
    if (customer.date === "") {
        errors.push('Please select a valid date.');
    }
    if (!addressPattern.test(customer.address)) {
        errors.push('Please enter a valid home address.');
    }
    if (!selectedSex.value) {
        errors.push('Please select a sex.');
    }
    if (!customer.province) {
        errors.push('Please enter your province.');
    }
    if (!customer.district) {
        errors.push('Please enter your district.');
    }
    if (!customer.subdistrict) {
        errors.push('Please enter your sub-district.');
    }
    const postalCodePattern = /^[0-9]{5}$/;
    if (!postalCodePattern.test(customer.postalcode)) {
        errors.push('Please enter a valid 5-digit postal code.');
}
    // if (!selectedSex.value) {
    //     alert('Please select a sex.');
    //     return;
    // }
    if (errors.length > 0) {
        errorMessages.value = errors;
        showError.value = true;
        return;
    }

    router.push('/page-homepage');
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

    .popup-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .popup {
        background: #fff;
        padding: 32px 32px;
        margin: 0px 30px;
        border-radius: 12px;
        box-shadow: 0 2px 16px rgba(0,0,0,0.2);
        min-width: 300px;
    }

    .popup h3 {
        margin-top: 0;
        color: #d32f2f;
    }

    .popup button {
        margin-top: 16px;
        background: #ffb700;
        color: #fff;
        border: none;
        padding: 8px 20px;
        border-radius: 6px;
        cursor: pointer;
    }
</style>
