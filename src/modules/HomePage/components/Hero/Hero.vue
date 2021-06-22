<template>
  <section
    :class="$style.container"
    :style="currentSlideBgr"
  >
    <SideNav />
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

import Button from "@/components/Button/Button.vue"
import SideNav from "@/components/SideNav/SideNav.vue"
import arrowLeft from "@/assets/icons/arrow-left.svg"
import arrowRight from "@/assets/icons/arrow-right.svg"
import Logo from "@/assets/logo.svg"
import SLIDES from './SLIDES'

export default defineComponent({
  name: 'HelloWorld',

  components: {
    Button,
    SideNav
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
    position: relative;

    height: 98vh;
    min-height: 700px;
    padding: 32px 24px;

    background-position: center;
    background-size: cover;

    transition: background-image 1s;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;

      display: block;
      width: 100%;
      height: 100%;

      background: linear-gradient(0deg, rgba(29, 29, 29, 0.2), rgba(29, 29, 29, 0.2));

      content: '';
    }
  }

  .inner {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    color: $white;
    text-align: center;
  }

  .heading {
    @include typo-headline;
  }

  .title {
    @include typo-title;
    max-width: 920px;

    margin-top: 19px;

    @media only screen and (min-width: 720px) {
      margin-top: 4px;

      @include typo-mega-title;
    }
  }

  .button {
    display: block;
    align-self: center;
    margin-top: 45px;
  }

  .controlsContainer {
    align-self: flex-end;

    @media only screen and (min-width: 720px) {
      align-self: flex-start;
    }
  }

  .controls {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;

    button {
      border: 0;

      background-color: transparent;
    }

    img {
      display: block;
    }

    @media only screen and (min-width: 720px) {
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
