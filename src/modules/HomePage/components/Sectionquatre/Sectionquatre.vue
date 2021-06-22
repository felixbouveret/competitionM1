<template>
  <section :class="$style.sectiongreen">
    <Wrapper :class="$style.wrappercustomsection">
      <div
        v-for="({text, name}, slideIndex) in slides"
        v-show="activeSlideId === slideIndex"
        :key="slideIndex.toString()"
        :class="$style.item"
      >
        <p :class="$style.comment">
          {{ text }}
        </p>
        <div :class="$style.divider" />
        <p :class="$style.author">
          {{ name }}
        </p>
      </div>
      <div :class="$style.buttonContainer">
        <button
          :class="[$style.button, {[$style.isActive]: hasPrevious}]"
          @click="decrement"
        >
          <img
            :src="ArrowLeft"
            alt=""
          >
        </button>
        <button
          :class="[$style.button, {[$style.isActive]: hasNext}]"
          @click="increment"
        >
          <img
            :src="ArrowRight"
            alt=""
          >
        </button>
      </div>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import SLIDES from './SLIDES.js'
import ArrowLeft from '@/assets/icons/circular-arrow-left.svg'
import ArrowRight from '@/assets/icons/circular-arrow-right.svg'

export default defineComponent({
  name: 'Sectionquatre',
  setup() {
    const slides = ref(SLIDES)
    const activeSlideId = ref(0)

    const hasPrevious = computed(() => !!activeSlideId.value)
    const hasNext = computed(() => activeSlideId.value < slides.value.length -1)

    const increment = () => {
      activeSlideId.value++
    }
    const decrement = () => {
      activeSlideId.value--
    }

    return {
      activeSlideId,
      slides,
      ArrowLeft,
      ArrowRight,
      hasPrevious,
      hasNext,
      increment,
      decrement
    } 
  }
})
</script>

<style lang="scss" module>
.sectiongreen {
  width: 100vw;
  min-height: 100vh;
  padding: 0 24px;
  padding-top: 120px;

  background-color: $green;
}

.wrappercustomsection {
  text-align: center;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 350px;
}

.comment {
  @include typo-headline;
  max-width: 510px;
  margin: auto;

  color: $white;

  line-height: 31px;
  text-align: center;
}

.divider {
  flex-grow: 1;
  width: 1px;
  height: 100%;
  margin: 32px;

  background-color: $white;
}

.author {
  @include typo-body;
  color: $white;
}

@media only screen and (max-width: 720px) {
  .sectiongreen {
    display: flex;
    height: 100vh;
  }
}

.buttonContainer {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}

.button {
  padding: 0;
  border: 0;
  border-radius: 64px;

  background-color: transparent;
  cursor: pointer;

  opacity: 0.2;

  pointer-events: none;

  &.isActive {
    opacity: 1;

    pointer-events: all;
  }

  img {
    display: block;
  }
}
</style>
