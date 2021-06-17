<template>
  <img
    alt="Vue logo"
    :src="Logo"
  >
  <Hero msg="Hello Vue 3 + TypeScript + Vite" />
  <button @click="getContent">
    click
  </button>
  <router-link to="/onboarding">
    Go to About
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Hero } from './components'
import Logo from '@/assets/logo.png'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
  },

  setup($prismic: any) {
    const data = ref(null)

    const getContent = async () => {
      // Query the API and assign the response to "response"
      data.value = await $prismic.client.query('')
    }

    return {
      getContent,
      data,
      Logo
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
