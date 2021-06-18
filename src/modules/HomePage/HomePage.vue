<template>
  <Hero />
  <Section />
  <Sectiondouble />
  <Sectiondoubled />
  <Sectionquatre />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hero, Section, Sectiondouble, Sectiondoubled, Sectionquatre } from './components'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
    Section,
    Sectiondouble,
    Sectiondoubled,
    Sectionquatre,
  },
})
</script>

