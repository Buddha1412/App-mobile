<template>
    <div class="slider-container">
        <br>
        <div class="slider-event">
            <SliderEvent/>
        </div>
        <br>
        <div class="slider-product">
            <SliderProduct/>
        </div>
    </div>
</template>

<script setup>

import SliderEvent from '../components/slider/SliderEvent.vue'
import SliderProduct from '../components/slider/SliderProduct.vue'

</script>

<style>
    .slider-product{
        padding: 0px 20px;
    }
</style>