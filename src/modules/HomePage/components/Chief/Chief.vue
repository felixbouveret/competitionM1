<template>
  <section
    :class="$style.container"
  >
    <Wrapper :class="$style.inner">
      <div :class="$style.heading">
        <p :class="$style.callOut">
          Réservez dès maintenant votre chef
        </p>
        <h2 :class="$style.title">
          Votre chef à portée de clic
        </h2>
        <p :class="$style.text">
          Choisissez le plat qui vous plait le plus, et recevez votre chef et les courses directement chez vous : il ne reste plus qu'à déguster !
        </p>
      </div>
      <ChiefNav
        :class="$style.nav"
        :items="slides"
        @on-set-active-id="activeSlide = $event"
      />
      <ChiefItem
        :class="$style.items"
        :items="slides"
        :active-slide="activeSlide"
      />
    </Wrapper>
    <Divider
      is-top
      has-head
      is-green
    />
    <Divider
      has-head
      is-green
    />
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'

import Divider from "@/components/Divider/Divider.vue"
import ChiefNav from '../ChiefNav'
import ChiefItem from '../ChiefItem'
import SLIDES from './SLIDES'

export default defineComponent({
  name: 'ChiefSection',

  components: {
    ChiefNav,
    ChiefItem,
    Divider
  },

  setup: () => {
    const slides = reactive(SLIDES)
    const activeSlide = ref(0)
    
    return { 
      slides,
      activeSlide,
    }
  }
})
</script>

<style lang="scss" module>
.container {
  position: relative;

  padding: 32px 0 148px;

  background-color: $cream;

  @media only screen and (min-width: 720px) {
    padding: 170px 24px 120px;
  }
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.heading {

  padding: 0 24px;

  text-align: center;
}

.callOut {
  @include typo-headline;

  margin-bottom: 32px;

  color: $mustard;
  font-size: 10px;

  @media only screen and (min-width: 720px) {
    @include typo-headline;
  }
}

.title {
  max-width: 900px;

  @include typo-title;
  color: $cactus;

  @media only screen and (min-width: 720px) {
    @include typo-mega-title;
  }
}

.text {
  @include typo-body;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 32px;
}

.nav {
  margin-top: 48px;

  @media only screen and (min-width: 720px) {
    margin-top: 80px;
  }
}

.items {
  padding: 0 24px;
}
</style>
