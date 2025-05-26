<template>
<div>
  
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path"/>
  </router-view>
</div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import liff from '@line/liff';

const route = useRoute();
const nickname = ref('');

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
    const profile = await liff.getProfile()
    nickname.value = profile.displayName;
    }
})
  
</script>

