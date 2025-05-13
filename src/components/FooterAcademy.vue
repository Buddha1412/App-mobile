<template>
    <div class="boss-footer">
        <div class="boss-des">
            <img :src="logo">
            <p>Helping Ambitious Learners Upskill<br>Themselves Shift To Top Product<br>Based Companies</p>
        </div>
        <div class="boss-column">
            <ul>
                <li class="footer-active"><a class="footer-text-active">About</a></li>
                <li v-for="(title, index) in footerTerm" :key="index">
                    <a>{{ title.text }}</a>
                </li>
            </ul>
            <ul>
                <li class="footer-active"><a class="footer-text-active">Useful Links</a></li>
                <li v-for="(title, index) in footerSocial" :key="index">
                    <a>{{ title.text }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

import { ref, require } from 'vue'
const logo = require('@/assets/Bosscoder.jpg')

const footerTerm = ref([
    { text: 'About Us' },
    { text: 'Contact Us' },
    { text: 'Term of Use' },
    { text: 'Refund Policy' },
    { text: 'Privacy Policy' }
])

const footerSocial = ref([
    { text: 'Instagram' },
    { text: 'Facebook' },
    { text: 'Linkdin' },
    { text: 'Telegram' },
    { text: 'Youtube' }
])

</script>

<style>
    .boss-footer {
        display: flex;
        margin: 80px auto;
        width: 90%;
    }

    .boss-des img {
        width: 300px;
        height: auto;
    }

    .boss-des p {
        font-size: 30px;
    }

    .boss-column {
        display: flex;
        justify-content: flex-end;
        flex: 1;
        gap: 50px;
    }

    .boss-column li {
        list-style: none;
        padding: 10px 0px;
    }

    .boss-column li a {
        font-size: 30px;
    }

    .boss-column li a.footer-text-active {
        color: #005bbd; 
        font-weight: bold; 
    }
</style>