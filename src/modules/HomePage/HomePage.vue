<template>
<Section></Section>
<Sectiondouble>
</Sectiondouble>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hero, Section, Sectiondouble } from './components'
import Logo from '@/assets/logo.png'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
    Section,
    Sectiondouble,
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
