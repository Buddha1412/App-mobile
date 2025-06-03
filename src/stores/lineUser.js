import { defineStore } from 'pinia'

export const useLineUserStore = defineStore('lineUser', {
  state: () => ({
    displayName: '',
    pictureUrl: '',
    userId: '',
    email: ''
  }),
  actions: {
    setUser(profile, idToken) {
      this.displayName = profile.displayName
      this.pictureUrl = profile.pictureUrl
      this.userId = profile.userId
      this.email = idToken.email || ''
    } 
  }
})
