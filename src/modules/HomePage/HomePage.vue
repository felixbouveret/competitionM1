<template>
  <Hero />
  <Section />
  <Sectiondouble />
  <Sectiondoubled />
  <Sectionquatre />
  <Bfmbanner />
  <UneHistoire />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hero, Section, Sectiondouble, Sectiondoubled, Sectionquatre, Bfmbanner, UneHistoire } from './components'
 
export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
    Section,
    Sectiondouble,
    Sectiondoubled,
    Sectionquatre,
    Bfmbanner,
    UneHistoire,
  },
})
</script>

