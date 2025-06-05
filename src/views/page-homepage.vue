<template>
  <div class="slider-container">
    <div v-if="loading"></div>
    <template v-else>
      <div class="slider-header">
        <input type="text" v-model="input.value" placeholder="Search topics..." />
        <div v-if="input.value">
          <!-- Search results: only filteredList -->
          <div
            class="item-topic-search"
            v-for="topic in filteredList"
            :key="topic"
            @click="scrollToTopic(topic)"
          >
            <p>{{ topic }}</p>
          </div>
          <div class="item-error" v-if="input.value && !filteredList.length">
            <p>No results found!</p>
          </div>
        </div>
      </div>
      <br>
      <div class="line-user-info" v-if="userProfile.displayName">
        <img :src="userProfile.pictureUrl" alt="Profile Picture" class="profile-pic" />
        <h1>{{ userProfile.displayName }}</h1>
        <p>User ID: {{ userProfile.userId }}</p>
        <p>Email: {{ userProfile.email }}</p>
      </div>
      <!-- Main topic sections: always render all topics -->
      <div ref="slideEventRef" class="item-topic">
        <div class="slider-event">
          <SliderEvent :topic="'SlideEvent'"/>
        </div>
      </div>
      <br>
      <div ref="slideProduct1Ref" class="item-topic">
        <div class="slider-product-1">
          <SliderProduct :topic="'SlideProduct-1'"/>
        </div>
      </div>
      <br>
      <div ref="slideProduct2Ref" class="item-topic">
        <div class="slider-product-2">
          <SliderProduct :topic="'SlideProduct-2'"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed, ref } from 'vue'
import SliderEvent from '../components/slider/SliderEvent.vue'
import SliderProduct from '../components/slider/SliderProduct.vue'
import liff from '@line/liff'

const input = reactive({ value: '' })
const topics = ['SlideEvent', 'SlideProduct-1', 'SlideProduct-2']
const filteredList = computed(() =>
  topics.filter((topic) => topic.toLowerCase().includes(input.value.toLowerCase()))
)

const slideEventRef = ref(null)
const slideProduct1Ref = ref(null)
const slideProduct2Ref = ref(null)

function scrollToTopic(topic) {
  let el = null
  if (topic === 'SlideEvent') el = slideEventRef.value
  if (topic === 'SlideProduct-1') el = slideProduct1Ref.value
  if (topic === 'SlideProduct-2') el = slideProduct2Ref.value
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const userProfile = reactive({
  displayName: '',
  pictureUrl: '',
  userId: '',
  email: ''
})

const loading = ref(true)

onMounted(async () => {
  try {
    await liff.init({ liffId: '2007300744-prPq3P8b' })
    if (!liff.isLoggedIn()) {
      liff.login({
        redirectUri: 'https://benz-mobile.vercel.app/'
      })
      return
    }
    const profile = await liff.getProfile()
    console.log('LINE Profile:', profile)
    userProfile.displayName = profile.displayName
    userProfile.pictureUrl = profile.pictureUrl
    userProfile.userId = profile.userId
    const idToken = liff.getDecodedIDToken()
    userProfile.email = idToken?.email || ''
  } catch (error) {
    console.error('Error during LIFF initialization:', error)
  } finally {
    loading.value = false
  }
})
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

.slider-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.item-topic-search {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  width: 200px;
  text-align: center;
}

.slider-product-2 {
    height: 0px;
}
</style>