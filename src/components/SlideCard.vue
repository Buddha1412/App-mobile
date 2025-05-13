<template>
    <div class="slider">
        <div
            class="item"
            v-for="(slide, index) in slides"
            :key="index"
        >
            <div>
                <div class="profile">
                    <div class="profile-img">
                    <img :src="slide.imgSrc" alt="Card Image" class="selfies-img">
                    </div>
                    <div class="profile-des">
                        <h1> {{ slide.name }} </h1>
                        <p> {{ slide.department }} </p>
                    </div>
                </div>
            </div>
            <div class="profile-quote">
                <p class="quotation-1">"</p>
                <div class="quote">
                    <p> {{ slide.quote1 }} </p>
                    <p> {{ slide.quote2 }} </p>
                </div>
                <p class="quotation-2">"</p>
            </div>
        </div>
        <button id="next">&gt;</button> 
        <button id="prev">&lt;</button>
    
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

import { initSlider } from '../MyJsComponent/slide.js'

const slides = ref([
    {
      name: "Mannu",
      department: 'UI/UX Designer',
      quote1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
      quote2: '',
      imgSrc: require('@/assets/selfies_img/taylor-8Vt2haq8NSQ-unsplash.jpg'),
    },
    {
      name: 'Akhil Reddy',
      department: 'Software Engineer At Recro',
      quote1: 'Bosscoder academy made me a complate software engineer.',
      quote2: 'I was working in infosys & was struggling to crack the product companies due to lack of understanding in DSA and system design',
      imgSrc: require('@/assets/selfies_img/vince-fleming-j3lf-Jn6deo-unsplash.jpg'),
    },
    {
        name: 'Rakesh Kumar',
        department: 'Software Engineer At Recro',
        quote1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit',
        imgSrc: require('@/assets/selfies_img/wellington-ferreira-72TE8cWKXRY-unsplash.jpg'),
    },
  ])

onMounted(() => {
    initSlider()
})

</script>

<style>
.slider {
    position: relative;
    width: 100%;
    height: 500px;
}

.item {
    position: absolute;
    width: 380px;
    height: 550px;
    text-align: justify;
    background-color: #b9cbff;
    border-radius: 10px;
    border: 2px solid #405080;
    padding: 20px;
    transition: 0.5;
    left: calc(50% - 180px);
    top: 0;
}

.selfies-img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

.profile h1 {
    font-size: 15px;
}

.profile {
    display: flex;
    align-items: center;
    gap: 15px;
}

.profile-img {
    flex-shrink: 0;
}

.profile-des {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
}

.profile-des h1 {
    font-size: 30px;
    margin: 0 auto;
}

.profile-des p {
    font-size: 15px;
    margin: 0;
}

.profile-quote {
    margin: 10px;
}

.profile-quote p {
    font-size: 25px;
    text-align: left;
}

.quotation-1 {
    font-size: 30px;
    font-weight: bold;
    margin: 20px 2px 0px 0px;
}

.quotation-2 {
    font-size: 30px;
    text-align: right;
    font-weight: bold;
    margin: 35px 2px 0px 0px;
}

#next, #prev {
    position: absolute;
    top: 40%;
    color: #000000;
    background-color: transparent;
    border: none;
    font-size: 3rem;
    font-family: monospace;
    font-weight: bold;
    left: 50px;
}

#next {
    left: unset;
    right: 50px;
}

</style>
