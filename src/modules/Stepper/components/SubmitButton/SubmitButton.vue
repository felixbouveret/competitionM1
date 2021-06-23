<template>
  <div :class="$style.container">
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
  padding: 24px;
  border-top: solid 1px $cactus;

  background-color: $cream;

  @media only screen and (min-width: 720px) {
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
</style>
