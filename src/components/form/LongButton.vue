<template>
    <div class="long-btn">
        <button @click="navigateToHomepage"><a>{{ text }}</a></button>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'
    import { useRouter } from 'vue-router'
    defineProps(
        {
            text: String
        }
    )

    const router = useRouter();

    const navigateToHomepage = () => {
        console.log('dothis')
        router.push('/homepage');
    }
</script>

<style>
    .long-btn {
        margin-top: 80px;
    }

    .long-btn button {
        display: flex;
        margin: 0 auto;
        background-color: rgb(255, 183, 0);
        border: none;
        border-radius: 10px;
        padding: 12px 150px;
        font-size: 25px;
        color: rgb(207, 51, 51);
    }

    .long-btn button:active {
        background-color: rgb(255, 150, 0);
        color: white;
    }
</style>