<template>
<div class="address-form-container">
    <div class="address-form-1">
        <div>
            <select v-model="selectedProvince" @change="loadDistricts">
                <option disabled value="">ffrgsrg</option>
                <option v-for="province in provinces" :key="province" :value="province">
                    {{ province.name_th }}
                </option>
            </select>
        </div>

        <div>
            <select v-model="selectedDistrict" @change="loadSubdistricts" :disable="!selectedProvince">
                <option disabled value="">จตุจักร</option>
                <option v-for="district in districts" :key="district" :value="district">
                    {{ district.name_th }}
                </option>
            </select>
        </div>
    </div>

    <div class="address-form-2">
        <div>
            <select v-model="selectedSubdistrict" :disabled="!selectedDistrict">
                <option disabled value="">ลาดยาว</option>
                <option v-for="subdistrict in subdistricts" :key="subdistrict" :value="subdistrict">
                    {{ subdistrict.name_th }}
                </option>
            </select>
        </div>

        <div class="medium-form">
            <div>
                <input
                    type="text"
                    v-model="postalCode"
                    @input="onInput"
                    maxlength="5"
                    pattern="\d{5}"
                    inputmode="numeric"
                >     
            </div>   
        </div>
    </div>
</div>
</template>

<script setup>

import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const selectedProvince = ref("");
const selectedDistrict = ref("");
const selectedSubdistrict = ref("");
const postalCode = ref("");

const provinces = ref([]);
const districts = ref([]);
const subdistricts = ref([]);

async function fetchProvinces() {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json');
        provinces.value = response.data;
    } catch (error) {
        console.error("Error fetching provinces:", error);
    }
}

function loadDistricts() {
  selectedDistrict.value = null; 
  selectedSubdistrict.value = null;
  postalCode.value = "";
  const province = selectedProvince.value;
  districts.value = province ? province.amphure : [];
}

function loadSubdistricts() {
  selectedSubdistrict.value = null; 
  postalCode.value = "";
  const district = selectedDistrict.value;
  subdistricts.value = district ? district.tambon : [];
}

watch(selectedSubdistrict, (Subdistrict) => {
    if (Subdistrict) {
        postalCode.value = Subdistrict.zip_code || "";
    }
});

onMounted(() => {
    fetchProvinces();
});

</script>

<style>
    .address-form-1 ,
    .address-form-2 {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 25px auto;
    }

    .address-form-1 select,
    .address-form-2 select {
        width: 165px;
        padding: 15px 20px;
        font-size: 18px;
        border: 1px solid #ffffff;
        border-radius: 10px;
        background-color: #fff;
        box-sizing: border-box;
        appearance: none; 
        cursor: pointer;
        text-overflow: ellipsis; 
    }

    select option {
        white-space: nowrap;
    }
    
    .medium-form div input {
        border: 1px solid white;
        border-radius: 10px;
        padding: 15px 20px;
        width: 120px;
        font-size: 16px;
    }
</style>