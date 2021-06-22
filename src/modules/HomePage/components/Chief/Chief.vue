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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .
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
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'

import ChiefNav from '../ChiefNav'
import ChiefItem from '../ChiefItem'
import SLIDES from './SLIDES'

export default defineComponent({
  name: 'ChiefSection',

  components: {
    ChiefNav,
    ChiefItem
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
    padding: 148px 24px;
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
