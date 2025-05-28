<template>
<div>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path"/>
  </router-view>
</div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import liff from '@line/liff';
import axios from 'axios';

const route = useRoute();

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
  if (liff.isLoggedIn()) {
    liff.login();
    return
  }
  try {
    const profile = await liff.getProfile()
    const idToken = liff.getDecodedIDToken()

    await axios.post('http://app-mobile-hjxy.vercel.app', {
      userId: idToken.sub,
      name: profile.displayName,
      email: idToken.email || ''
    })

    console.log('User data sent to backend')
  } catch (err) {
    console.error('Error sending user data:', err)
  }
})

</script>

