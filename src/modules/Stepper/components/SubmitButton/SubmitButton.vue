<template>
  <div :class="$style.container">
    <Progression :progression="progression" />
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

  background-color: $cream;
}

.button {
  width: 100%;
  margin-top: 32px;

  text-transform: none;

  @include typo-body;
}
</style>
