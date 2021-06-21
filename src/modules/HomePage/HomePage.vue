<template>
  <Hero />
  <Chief />
  <Section />
  <Sectiondouble />
  <Sectiondoubled />
  <Sectionquatre />
  <Bfmbanner />
  <UneHistoire />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hero, Chief,Section, Sectiondouble, Sectiondoubled, Sectionquatre, Bfmbanner, UneHistoire } from './components'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
    Chief,
    Section,
    Sectiondouble,
    Sectiondoubled,
    Sectionquatre,
    Bfmbanner,
    UneHistoire,
  },
})
</script>

