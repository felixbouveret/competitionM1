<template>
  <section
    :class="$style.container"
    :style="currentSlideBgr"
  >
    <Wrapper :class="$style.inner"> 
      <img
        :src="Logo"
        alt=""
      >
      <div :class="$style.content">
        <p :class="$style.heading">
          un service unique
        </p>
        <h1 :class="$style.title">
          La qualité à portée de main
        </h1>
        <Button
          is-light
          :class="$style.button"
        >
          Réserver mon chef !
        </Button>
      </div>
      <div :class="$style.controlsContainer">
        <div :class="$style.controls"> 
          <button
            @click="decrement"
          >
            <img
              :src="arrowLeft"
              alt="arrow-left"
            >
          </button>
          <button
            @click="increment"
          >
            <img
              :src="arrowRight"
              alt="arrow-right"
            >
          </button>
        </div>
        <div :class="$style.indexes">
          <span :class="$style.currentIndex">
            0{{ count + 1 }}
          </span>
          <span>
            / 0{{ slidesCount }}
          </span>
        </div>
      </div>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, computed } from 'vue'

import Button from "@/components/Button"
import arrowLeft from "@/assets/icons/arrow-left.svg"
import arrowRight from "@/assets/icons/arrow-right.svg"
import Logo from "@/assets/logo.svg"
import SLIDES from './SLIDES'

export default defineComponent({
  name: 'HelloWorld',

  components: {
    Button
  },

  setup: () => {
    const slides = reactive(SLIDES)
    const count = ref(0)
    const currentSlideBgr = computed(() => `background-image: url('${slides[count.value].url}')`)
    
    const slidesCount = computed(() => slides.length)

    const increment = () => {
      if(count.value < slides.length) {
        count.value++
      }
      else {
        count.value = 0
      }
      console.log(count.value);
      
    } 
    const decrement = () => {
      count.value--
    } 

    return { 
      count,
      currentSlideBgr,
      Logo,
      slidesCount,
      arrowLeft,
      arrowRight,
      increment,
      decrement
    }
  }
})
</script>

<style lang="scss" module>
  .container {
    padding: 32px 24px;
    position: relative;
    height: 98vh;
    min-height: 700px;
    transition: background-image 1s;
    background-position: center;
    background-size: cover;

    &::after {
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      background: linear-gradient(0deg, rgba(29, 29, 29, 0.2), rgba(29, 29, 29, 0.2));
      z-index: 0;
    }
  }

  .inner {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .content {
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
  }

  .heading {
    @include typo-headline;
  }

  .title {
    @include typo-title;

    text-transform: uppercase;
    margin-top: 19px;
    max-width: 720px;

    @media (min-width: 720px) {
      margin-top: 4px;

      @include typo-mega-title;
    }
  }

  .button {
    margin-top: 45px;
    display: block;
    align-self: center;
  }

  .controlsContainer {
    align-self: flex-end;

    @media (min-width: 720px) {
      align-self: flex-start;
    }
  }

  .controls {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;

    button {
      background-color: transparent;
      border: 0;
    }

    img {
      display: block;
    }

    @media (min-width: 720px) {
      margin-bottom: 64px;
    }
  }

  .indexes {
    color: $white;
  }

  .currentIndex {
    @include typo-body;

    font-size: 30px;
  }
</style>
