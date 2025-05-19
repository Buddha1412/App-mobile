<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path"/>
  </router-view>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
  () => route.name,
  (newRouteName) => {
    switch (newRouteName) {
      case 'HomePage':
        document.body.style.backgroundColor = '#fff';
        break;
      case 'UserForms':
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

