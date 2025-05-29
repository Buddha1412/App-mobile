<template>
<div>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path"/>
  </router-view>
</div>
</template>

<script setup>
import { ref, onMounted, watch, provide } from 'vue';
import { useRoute } from 'vue-router';
import liff from '@line/liff';
// import axios from 'axios';

const route = useRoute();
const userProfile = ref(null);

watch(
  () => route.name,
  (newRouteName) => {
    switch (newRouteName) {
      case 'AppHomepage':
        document.body.style.backgroundColor = '#fff';
        break;
      case 'AppTemplate':
        document.body.style.backgroundColor = '#fff';
        break;
      case 'AppLogin':
        document.body.style.backgroundColor = '#ff3500';
        break;
      default:
        document.body.style.backgroundColor = '#fff';
        break;
    }
  },
  { immediate: true }
);

onMounted(async () => {
  if (!liff.isLoggedIn()) {
    liff.login();
  }
  try {
    
    const profile = await liff.getProfile();
    console.log(profile)
    const idToken = liff.getDecodedIDToken()
    userProfile.value = {
      displayName: profile.displayName,
      pictureUrl: profile.pictureUrl,
      userId: profile.userId,
      email: idToken.email || ''
    }
  } catch (error) {
    console.error('Error during LIFF initialization:', error);
    alert('Failed to initialize LIFF. Please try again.');
  }
});

provide('userProfile', userProfile)
</script>

