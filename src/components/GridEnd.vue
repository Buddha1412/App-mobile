<template>

    <OurProgram
        text="Bosscoder End-To-End Solutions"
        description1="to give you an immersive learning experience"
        description2="and help you ace in your tech career"
    />

    <div class="boss-container">
        <div class="boss-background">
            <div class="boss-content">
                <div v-for="(text, index) in bossContent" :key="index">
                    <p>{{ text }}</p>
                </div>
            </div>
        </div>
        <div class="meeting-container">
            <div 
                v-for="(imgSrc, index) in imgSources"
                :key="index"
                :class="'meeting-img' + (index + 1)"
            >
                <img :src="imgSrc" :alt="'Meeting ' + (index + 1)" />
            </div>
        </div>
    </div>

</template>

<script setup>
import OurProgram from './OurProgram.vue';

import { ref, require } from 'vue'
   
const imgSources = [
    require("@/assets/zoom-meeting/gettyimages-148196668-2048x2048.jpg"),
    require("@/assets/zoom-meeting/gettyimages-1278943643-2048x2048.jpg"),
    require("@/assets/zoom-meeting/gettyimages-1289433294-2048x2048.jpg"),
    require("@/assets/zoom-meeting/gettyimages-2205989792-2048x2048.jpg"),
    require("@/assets/zoom-meeting/gettyimages-522649188-2048x2048.jpg"),
]

const bossContent = ref([
    'World-Class Curriculam, Designed By industry Experts',
    'Live Classes By intructors Working in Top Teck Compies',
    'Daily Hand Picked Problems Weekly Contents With Quick Doubt Solving',
    'Regular 1:1 Mentorship Sessions And Mock Interviews',
    'Develop Industry-Relevant Projects Based On Real-World Examples'
])
     
</script>

<style>
.boss-container {
    display: flex;
    align-items: center; 
    justify-content: flex-start;
    height: 1000px;
}

.boss-content > div {
    width: 100%;
    background-color: #effdff;  
    padding: 30px 40px;         
    border-radius: 10px;
}

.boss-content p {
    font-size: 20px;
    margin: 15px 0;
}

.meeting-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    position: relative; 
    width: 350px;
    margin-left: -200px; 
}

.meeting-container div {
    width: 230px;
    height: 160px;
    position: absolute; 
}

.meeting-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.meeting-img1  {
    position: relative;
    right: -320px;
    top: 170px;
}

.meeting-img2  {
    position: relative;
    top: 50px;
    right: -440px;
}

.meeting-img3  {
    position: relative;
    top: -70px;
    right: -320px;
}

.meeting-img4  {
    position: relative;
    top: -190px;
    right: -440px;
}

.meeting-img5  {
    position: relative;
    top: -310px;
    right: -320px;
}
</style>