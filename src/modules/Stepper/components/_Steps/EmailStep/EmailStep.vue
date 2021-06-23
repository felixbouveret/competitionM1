<template>
  <div :class="$style.container"> 
    <h2 :class="$style.title">
      NOus y sommes !
    </h2>
    <p :class="$style.description">
      Dernière étape avant de 
      recevoir le contact de votre chef 
      directement dans votre boite mail !
    </p>
    <div :class="$style.input">
      <label for="email"> Email* </label>
      <input
        id="rmail"
        placeholder="bonjour@persiletromarin.fr"
        type="text"
      >
    </div>
    <Button
      :class="$style.button"
      is-wired
      @on-click="$emit('next-step')"
    >
      ENVOYER
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import StepData from './StepData'
import Button from '@/components/Button/Button.vue'

export default defineComponent({
  name: "EmailStep",

  components: {
    Button
  },

  emits: ['next-step'],

  setup() {
    const title = ref(StepData.title)
    const question = ref(StepData.question)
    const answers = ref(StepData.answers)

    const seletectedValue = ref(null)
    return {
      question,
      title,
      answers,
      seletectedValue
    };
  },
});
</script>

<style lang="scss" module>
.container {
  height: 100%;
  padding: 120px 24px;
}

.title {
  @include typo-title;
  color: $cactus;
  text-align: center;
}

.description {
  margin-top: 70px;

  text-align: center;
}

.input {
  margin-top: 80px;

  label {
    display: block;
    margin-bottom: 32px;

    @include typo-body;
  }

  input {
    width: 100%;
    padding: 8px;
    padding-left: 0;
    border: 0;
    border-bottom: solid 1px $black;

    background-color: transparent;
    outline: none;

    @include typo-body;

    &::placeholder {
      @include typo-body;
    }
  }
}

.button {
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 75px auto 0;
}
</style>
