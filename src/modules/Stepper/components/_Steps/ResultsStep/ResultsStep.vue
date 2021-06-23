<template>
  <div :class="$style.container"> 
    <h2 :class="$style.title">
      {{ title }}
    </h2>

    <Carousel
      :class="$style.carousel"
      :items-to-show="1.2"
      :model-value="count"
      wrap-around
    >
      <Slide
        v-for="({name, type, desc, rate, img}, index) in results"
        :key="index.toString()"
      >
        <div 
          :class="$style.slide"
        >
          <img
            :class="$style.img"
            :src="img"
            alt=""
          >
          <span :class="$style.rate">
            <img
              :src="starIcon"
              alt=""
            >
            {{ rate }}
          </span>
          <div :class="$style.content">
            <p :class="$style.name">
              {{ name }}
            </p>
            <p :class="$style.type">
              {{ type }}
            </p>
            <p :class="$style.desc">
              {{ desc }}
            </p>
            <Button
              is-green
              :class="$style.button"
            > 
              {{ ctaText }}
            </Button>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination :class="$style.pagination" />
      </template>
    </Carousel>
    <div :class="$style.buttons">
      <button @click="decrement">
        Precedent
      </button>
      <button @click="increment">
        Suivant
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import starIcon from '@/assets/icons/star.svg'
import Button from '@/components/Button/Button.vue'
import 'vue3-carousel/dist/carousel.css';
import { defineComponent, ref } from "vue";
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import StepData from './StepData'

export default defineComponent({
  name: "ResultsStep",

  components: {
    Carousel, 
    Slide, 
    Pagination,
    Button
  },

  emits: ['next-step'],

  setup() {
    const title = ref(StepData.title)
    const results = ref(StepData.results)
    const ctaText = ref(StepData.ctaText)

    const count = ref(0)

    const seletectedValue = ref(null)

    const increment = () => {
      count.value++
    }
    const decrement = () => {
      count.value--
      
    }
    return {
      increment,
      decrement,
      title,
      results,
      seletectedValue,
      count,
      starIcon,
      ctaText
    };
  },
});
</script>

<style lang="scss" module>
.container {
  position: relative;

  height: 100%;
  padding: 32px 0;
}

.title {
  @include typo-title;
  color: $cactus;
  text-align: center;
}

.carousel {
  margin-top: 24px;
}

.slide {
  position: relative;

  width: 100%;
  margin: 0 9px;
  border-radius: 12px;

  background-color: $white;
  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.08);
}

.img {
  width: 100%;
}

.rate {
  position: absolute;
  top: 10px;
  left: 10px;

  padding: 2px 8px 2px 4px;
  border-radius: 4px;

  background-color: $white;
}

.content {
  padding: 30px;
}

.name {
  @include typo-headline;
  color: $cactus;
  text-transform: uppercase;
}

.type {
  @include typo-body;
  margin-top: 8px;

  font-weight: 500;
}

.desc {
  @include typo-body;
  margin-top: 24px;
}

.pagination {
  margin-top: 32px;

  pointer-events: none;
}

.buttons {
  position: absolute;

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 48px;

  transform: translateY(-100%);

  button {
    border: 0;

    background-color: transparent;
  }
}

.button {
  margin-top: 32px;
}

</style>

<style lang="scss">
  .carousel__pagination-item button {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 8px;

    background-color: rgba($color: $black, $alpha: 0.4);
    transform: scale(0.9);

    &.carousel__pagination-button--active {
      background-color: $black;
    }
  }
</style>