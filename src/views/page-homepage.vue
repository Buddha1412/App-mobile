<template>
    
    <div class="slider-container">
        <input type="text" v-model="input" placeholder="Search fruits..." />
    <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
        <p>{{ fruit }}</p>
    </div>
    <div class="item error" v-if="input&&!filteredList().length">
        <p>No results found!</p>
    </div>
        <br>
        <div class="slider-event">
            <SliderEvent/>
        </div>
        <div class="slider-event">
            <SliderEvent/>
        </div>
        <br>
        <div class="slider-product">
            <SliderProduct/>
    </div>
    <div class="line-user-info" v-if="userProfile.displayName">
      <img :src="userProfile.pictureUrl" alt="Profile Picture" class="profile-pic" />
      <h1>{{ userProfile.displayName }}</h1>
      <p>User ID: {{ userProfile.userId }}</p>
      <p>Email: {{ userProfile.email }}</p>
    </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import SliderEvent from '../components/slider/SliderEvent.vue'
import SliderProduct from '../components/slider/SliderProduct.vue'
import { userLineUserStore } from '@/stores/lineUser.js'
import liff from '@line/liff'

let input = reactive({
  value: ''
})

const fruits = ['Apple', 'Banana', 'Cherry'];
function filteredList() {
  return fruits.filter((fruit) => fruit.toLowerCase().includes(input.value.toLowerCase()));
}

const userProfile = userLineUserStore()

onMounted(async () => {
  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }
  try {
    const profile = await liff.getProfile();
    const idToken = liff.getDecodedIDToken()
    userProfile.setUser(profile, idToken)
  } catch (error) {
    console.error('Error during LIFF initialization:', error);
    alert('Failed to initialize LIFF. Please try again.');
  }
});

</script>

<style scoped>
.line-user-info {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 32px 24px 24px 24px;
  margin: 32px auto 0 auto;
  max-width: 350px;
  text-align: center;
  transition: box-shadow 0.2s;
}

.line-user-info:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.16);
}

.profile-pic {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #06c755;
  box-shadow: 0 2px 8px rgba(6,199,85,0.15);
}

.line-user-info h1 {
  font-size: 1.5rem;
  margin: 12px 0 8px 0;
  color: #222;
  font-weight: 700;
}

.line-user-info p {
  margin: 4px 0;
  color: #555;
  font-size: 1rem;
  word-break: break-all;
}
</style>