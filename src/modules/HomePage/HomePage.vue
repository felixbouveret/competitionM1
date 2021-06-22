<template>
  <Hero />
  <Chief />
  <Section />
  <Sectiondouble />
  <Sectiondoubled />
  <Sectionquatre />
  <Bfmbanner />
  <UneHistoire />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Hero, Chief,Section, Sectiondouble, Sectiondoubled, Sectionquatre, Bfmbanner, UneHistoire } from './components'
import Footer from '@/components/Footer/Footer.vue'

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
    Footer,
  },
})
</script>

