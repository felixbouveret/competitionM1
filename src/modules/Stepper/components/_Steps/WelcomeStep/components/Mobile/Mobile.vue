<template>
  <div>
    <img
      :class="$style.image"
      :src="Hero"
      alt=""
    >
    <div :class="$style.content">
      <h1 :class="$style.title">
        Bienvenue sur le quizz qui vous dévoile quel chef est fait pour vous !
      </h1>
      <p>
        Grâce à ce questionnaire, découvrez à quel chef vous ressemblez et lequel des chefs de chez Peril & Romarin vous correspond le plus
      </p>
      <Button
        :class="$style.button"
        @on-click="$emit('next-step')"
      >
        C’EST PARTI !
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from '../../../../../assets/welcome.png'

import Button from '@/components/Button/Button.vue'

export default defineComponent({
  name: "WelcomeStep",
  
  components: {
    Button
  },

  emits: ['next-step'],

  setup() {
    return {
      Hero
    };
  },
});
</script>

<style lang="scss" module>
.image {
  width: 100%;
  height: 422px;
  object-fit: cover;
}

.content {
  max-width: 500px;
  margin: 0 auto;
  padding: 42px;

  text-align: center;

  @include typo-body;
}

.title {
  @include typo-headline;
  margin-bottom: 16px;

  color: $cactus;
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
