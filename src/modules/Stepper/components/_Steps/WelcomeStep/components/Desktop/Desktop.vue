<template>
  <div
    :class="$style.container"
    :style="`background-image: url(${Hero})`"
  >
    <ul :class="$style.menu">
      <li
        v-for="({url, text}, menuId) in data"
        :key="menuId.toString()"
      >
        <a :href="url"><span :class="$style.span">{{ text }}</span></a>
      </li>
    </ul>
    <div :class="$style.content">
      <img
        :class="$style.logo"
        :src="Logo"
        alt=""
      >
      <div>
        <h1 :class="$style.title">
          QUIZ PERSIL & ROMARIN
        </h1>
        <p :class="$style.desc">
          Découvrez quel chef est fait pour vous !  
        </p>
      </div>
      <Button
        is-light
        @on-click="$emit('next-step')"
      >
        C’EST PARTI !
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from '../../../../../assets/desktopHero.png'
import Logo from '@/assets/logo.svg'
import data from './data.js'

import Button from '@/components/Button/Button.vue'

export default defineComponent({
  name: "WelcomeStep",
  
  components: {
    Button
  },

  emits: ['next-step'],

  setup() {
    return {
      Hero,
      Logo,
      data
    };
  },
});
</script>

<style lang="scss" module>

.menu {
  position: absolute;
  top: 0;
  left: 50%;

  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1162px;
  padding: 48px 32px 0;

  transform: translateX(-50%);

  a {
    @include typo-body;
    display: block;
    padding: 12px;

    color: $white;
    text-transform: uppercase;
    text-decoration: none;

    &:hover span::before {
      width: 100%;
    }
  }

  .span {
    position: relative;

    &::before {
      position: absolute;
      bottom: -8px;
      left: 0;

      width: 0;
      height: 1px;

      background-color: $white;

      transition: width 0.3s;

      content: '';
    }
  }
}

.container {
  display: flex;
  height: 100%;

  background-position: center;

  background-size: cover;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-height: 455px;
  margin: auto;
  padding: 42px;

  text-align: center;

  @include typo-body;
}

.logo {
  width: 218px;
}

.title {
  @include typo-big-title;
  margin-bottom: 16px;

  color: $white;
}

.desc {
  color: $white;

  @include typo-body;
  font-size: 30px;
  line-height: 30px;
}

.button {
  margin-top: 32px;
  padding-top: 11px;
  border: solid $black 1px;

  color: $black;
  font-weight: 400;

  background-color: transparent;

  @include typo-body;
}
</style>
