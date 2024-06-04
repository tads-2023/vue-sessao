import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const session = ref({})
  const hasSession = computed(() => session.value.token !== undefined )
  function createSession(token, email) {
    session.value = {
        token,
        email
    }
  }

  function destroySession() {
    session.value = {}
  }

  return { 
    session,
    hasSession,
    createSession, 
    destroySession 
  }
})
