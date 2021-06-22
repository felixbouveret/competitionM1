<template>
  <Hero :class="$style.hero" />
  <Header />
  <Chief />
  <Section />
  <Sectiondouble :data="quiconcesSection1" />
  <Sectiondouble
    is-reverse
    :data="quiconcesSection2"
  />
  <Sectionquatre />
  <Bfmbanner />
  <UneHistoire />
  <NewsLetter />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { 
  Hero,
  Chief,
  Section,
  Sectiondouble, 
  Sectionquatre,
  Bfmbanner,
  UneHistoire,
  NewsLetter
} from './components'

import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import {quiconcesSection1, quiconcesSection2} from './message'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    Hero,
    Chief,
    Section,
    Sectiondouble,
    Sectionquatre,
    Bfmbanner,
    UneHistoire,
    NewsLetter,
    Footer,
    Header
  },

  setup() {
    return {
      quiconcesSection1, 
      quiconcesSection2
    }
  }
})
</script>

<style lang="scss" module>
.hero {
  z-index: 6;

  margin-bottom: -84px;

  @media only screen and (min-width: 800px) {
    margin-bottom: -90px;
  }
}
</style>