<template>  

  <div class="navbar">
      <img :src="logo" class="logo-img">
      <li class="nav-active"><a class="text-active">Free Masterclasses</a></li>
      <li v-for="(link, index) in navLinks" :key="index">
        <a :href="link.href">{{ link.text }}</a>
      </li>
  </div>

  <div class="container">
    <img :src="backgroundImg" class="background-img">
    <div class="float-description">
      <h1>Grab your Dream tech 
      <br>offer today</h1>
      <ul>
        <li v-for="(text, index) in description" :key="index">
          <a v-html="text"></a>
        </li>
      </ul>
      <button><a>Apply Now</a></button>
    </div>
  </div>

  <div class="logo-description">
    <h1>100+ Successful Alumni Working At Top Product-</h1>
    <h1>Based Company</h1>
  </div>

  <GridSponser/>
  <OurProgram
    text="Our Programs"
    description1="Ace Your Skills In Problem Solving In DSA, System"
    description2="Design And Development"
  />

  <CardHolder
    v-for="(img, index) in cardImages"
    :key="index"
    :imgSrc="img"
  />

  <div class="slide-container">
    <SlideCard/>
  </div>

  <GridEnd/>

  <div class="card-support-background">
    <OurProgram
      text="Placement And Career Support"
      description1="Helping students get exposed to a world"
      description2="opportunities"
    />
    <div class="card-group-support">
      <CardSupport v-for="index in 4" :key="index"/>
    </div>
    <button class="support-btn">
      <a>Know More</a>
    </button>
  </div>
  <FooterAcademy/>
</template>

<script setup>
  import { ref, require } from 'vue'

  import CardHolder from '@/components/CardHolder.vue'
  import OurProgram from '@/components/OurProgram.vue'
  import GridSponser from '@/components/GridSponser.vue'
  import CardSupport from '@/components/CardSupport.vue'
  import FooterAcademy from '@/components/FooterAcademy.vue'
  import SlideCard from '@/components/SlideCard.vue'
  import GridEnd from '@/components/GridEnd.vue'

  const logo = require('@/assets/Bosscoder.jpg')
  const backgroundImg = require('@/assets/Bosscoder-Background.png')
  const cardImages = ref([
    require('@/assets/people_working_1.jpg'),
    require('@/assets/people_working_1.jpg'),
  ])

  const navLinks = ref([
    { text: 'Teaching', href: '#teaching' },
    { text: 'Features', href: '#feature' },
    { text: 'Reviews', href: '#review' },
    { text: 'Programs', href: '#program' },
  ])

  const description = ref([
    'A highly structured, personalized and guided <br>word-class program',
    'Designed by industry expertst',
    'That will make you the best software developer <br>out there',
    "For ambition learners, who don't want <br>to settle for anything less in their tech <br>careers",
  ])

</script>

<style>

  .navbar {
    margin: 30px 16px;
    padding: 0;
    list-style-type: none;
    overflow: hidden;
    background-color: #ffffff;
  }

  .logo-img {
    float: left;
    margin-left: 30px;
  }

  .navbar img {
    height: 50px;
    width: 180px;
  }

  .navbar li {
    float: right;
  }

  .navbar li a {
    display: block;
    color: black;
    font-size: 20px;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .navbar li a.text-active {
    color: #005bbd; 
    font-weight: bold; 
  }
  .navbar li.nav-active {
    color: #005bbd;
    margin-left: 15px;
    padding: 0px 15px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
  }

  .background-img {
    width: 100%;
  }

  .container {
    margin-bottom: 70px;
  }

  .float-description {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-90%, -20%);
    background-color: #005bbd;
    padding: 50px 50px;
    color:#000000;
    box-shadow: 1px 1px 8px 2px;
  }

  .float-description h1 {
    font-size: 50px;
    color: white;
  }

  .float-description li {
    color: white;
  }

  .float-description li a {
    font-size: 30px;
    color: white;
  }

  .float-description button {
    display: block; 
    margin: 50px auto 0 auto;
    padding: 10px 20px; 
    background-color: #ffffff; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    box-shadow: 1px 1px 8px 1px;
  }

  .float-description button a {
    font-size: 18px;  
    font-weight: bold; 
    color: #005bbd; 
  }

  .logo-description {
    text-align: center;
    margin: 80px 0px 60px 0px;
  }

  .logo-description h1 {
    font-size: 35px;
  }

  .slide-container {
    margin: 120px 0px 200px 0px;
  }

  .slide-btn {
    background-color: white;
    border: 1px solid #005bbd;
  }

  .card-support-background {
    background-color: #ecf1ff;
    padding: 50px 0px;
  }

  .card-group-support {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: auto;
    justify-content: space-between;
    width: 85%;
  }

  .support-btn {
    display: flex;
    margin: auto;
    border: 1px solid #005bbd;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0px 0.5px 10px 10px rgba(0, 0, 0, 0.1); 
  }

  .support-btn a{
    color: #005bbd;
    font-size: 25px;
    font-weight: bold; 
  }
</style>
