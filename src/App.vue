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
import { useLineUserStore } from './stores/lineUser';

const route = useRoute();
const lineUser = userLineStore();

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

</script>
