<template>
  <Hero />
  <Section />
  <Sectiondouble />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hero, Section, Sectiondouble } from './components'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
    Section,
    Sectiondouble,
  },
})
</script>

