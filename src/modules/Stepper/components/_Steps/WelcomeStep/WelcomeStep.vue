<template>
  <div>
    <img
      :src="Hero"
      alt=""
    >
    <div :class="$style.content">
      <p>
        Bienvenue sur le quizz qui vous dévoile quel chef est fait pour vous !
      </p>
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
import Hero from '../../../assets/welcome.png'

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
.content {
  padding: 42px;

  @include typo-body;

  text-align: center;

  p:not(:last-child) {
    margin-bottom: 16px;
  }
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
