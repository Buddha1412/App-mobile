<template>
    <div class="date-picker">
        <div><DatePicker v-model="date" class="custom-date-picker" /></div>
    </div>
</template>

<script setup>
import DatePicker from '@vuepic/vue-datepicker';

</script>

<style>
    .custom-date-picker {
        border-radius: 10px;
    }
</style>