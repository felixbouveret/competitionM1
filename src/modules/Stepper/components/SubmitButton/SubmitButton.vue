<template>
  <div :class="$style.container">
    <transition name="fade-in">
      <p
        v-show="hasError"
        :class="$style.error"
      >
        Une réponse est requise pour continuer
      </p>
    </transition>
    <Progression
      :class="$style.progress"
      :progression="progression"
    />
    <Button
      :class="$style.button"
      :is-active="isActive"
      @on-click="$emit('submit-button')"
    >
      Suivant
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Button from '@/components/Button/Button.vue'
import Progression from "../Progression/Progression.vue";

export default defineComponent({
  name: "SubmitButton",

  components: {
    Button,
    Progression
},

  props: {
    progression: {
      type: Object as PropType<any>,
      default: ():any => ({})
    },
    text: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: true
    }
  },

  emits: ['submit-button'],

  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
.container {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  padding: 24px;
  border-top: solid 1px $cactus;

  background-color: $cream;

  @media only screen and (min-width: 720px) {
    position: relative;

    display: flex;
    flex-direction: column-reverse;
    gap: 29px;
    border-top: 0;
  }
}

.progress {
  @media only screen and (min-width: 720px) {
    align-self: flex-end;
    width: 100%;
    max-width: 407px;
  }
}

.button {
  width: 100%;
  margin-top: 32px;

  @media only screen and (min-width: 720px) {
    margin-left: 40px;
  }

  text-transform: none;

  @include typo-body;

  @media only screen and (min-width: 720px) {
    align-self: flex-start;
    width: auto;
  }
}

.error {
  @include typo-body;
  position: absolute;
  top: 24px;
  left: 24px;

  @media only screen and (min-width: 720px) {
    left: 64px;
  }
}
</style>
