<template>
  <img
    alt="Vue logo"
    :src="Logo"
  >
  <Hero msg="Hello Vue 3 + TypeScript + Vite" />
  <router-link to="/onboarding">
    Go to Onboarding
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hero } from './components'
import Logo from '@/assets/logo.png'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
  },

  setup() {

    return {
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
