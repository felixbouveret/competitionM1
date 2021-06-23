<template>
  <div :class="$style.container"> 
    <h2 :class="$style.title">
      {{ title }}
    </h2>

    <Carousel
      :mouse-drag="false"
      :touche-drag="false"
      :class="$style.carousel"
      :items-to-show="1.2"
      :model-value="count"
      wrap-around
    >
      <Slide
        v-for="({name, type, desc, desk, rate, img}, index) in results"
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
            <span :class="$style.ratedesk">
              <img
                :src="starIcon"
                alt=""
              >
              <img
                :src="starIcon"
                alt=""
              >
              <img
                :src="starIcon"
                alt=""
              >
              <img
                :src="starIcon"
                alt=""
              >
              <img
                :src="starIcon"
                :class="$style.blackone"
                alt=""
              >
            </span>
            <p :class="$style.type">
              {{ type }}
            </p>
            <p :class="$style.desc">
              {{ desc }}
            </p>
            <p :class="$style.desk">
              {{ desk }}
            </p>
            <a :class="$style.lire">
              Lire plus
            </a>
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
        <span> 
          Précédent
        </span>
        <img
          :src="arrowLeftIcon"
          alt=""
        >
      </button>
      <button @click="increment">
        <span>
          Suivant
        </span>
        <img
          :src="arrowRightIcon"
          alt=""
        >
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import starIcon from '@/assets/icons/star.svg'
import arrowLeftIcon from '@/assets/icons/circular-arrow-left-cactus.svg'
import arrowRightIcon from '@/assets/icons/circular-arrow-right-cactus.svg'
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
      ctaText,
      arrowLeftIcon,
      arrowRightIcon
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

  & > div > ol {
    height: 70vh;
  }

  @media only screen and (min-width: 720px) {
    max-width: 1000px;
    margin: 0 auto;
  }
}

.slide {
  position: relative;

  width: 100%;
  margin: 0 9px;
  border-radius: 12px;

  background-color: $white;
  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.08);

  @media only screen and (min-width: 720px) {
    display: flex;
  }
}

.lire {
  display: none;

  @media only screen and (min-width: 720px) {
    display: block;
    margin-top: 30px;

    font-weight: 600;
    font-size: 18px;
    text-align: left;
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
  }
}

.img {
  width: 100%;
  border-radius: 12px;

  @media only screen and (min-width: 720px) {
    object-fit: cover;
  }
}

.ratedesk {
  display: none;

  @media only screen and (min-width: 720px) {
    display: block;
    margin-top: 30px;

    text-align: left;

    & > img {
      height: 25px;
      margin-right: 10px;
    }
  }
}

.rate {
  position: absolute;
  top: 10px;
  left: 10px;

  padding: 2px 8px 2px 4px;
  border-radius: 4px;

  background-color: $white;

  @media only screen and (min-width: 720px) {
    display: none;
  }
}

.content {
  padding: 30px;
}

.name {
  @include typo-headline;
  color: $cactus;
  text-transform: uppercase;

  @media only screen and (min-width: 720px) {
    font-size: 30px;
    text-align: left;
  }
}

.type {
  @include typo-body;
  margin-top: 8px;

  font-weight: 500;

  @media only screen and (min-width: 720px) {
    margin-top: 30px;
    margin-bottom: 30px;

    font-style: italic;

    text-align: left;
  }
}

.desc {
  @include typo-body;
  margin-top: 24px;

  @media only screen and (min-width: 720px) {
    display: none;
  }
}

.desk {
  @include typo-body;
  display: none;

  @media only screen and (min-width: 720px) {
    display: block;

    text-align: left;
  }
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

    img {
      display: none;
    }
  }

  @media only screen and (min-width: 720px) {
    left: 50%;

    width: 60%;

    transform: translateY(calc(-50% - 11px)) translateX(-50%);

    button {
      span {
        display: none;
      }

      img {
        display: block;
      }
    }
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

  .carousel__viewport {
    overflow: visible;
  }
</style>