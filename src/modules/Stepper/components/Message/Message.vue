<template>
  <div :class="$style.container">
    <p :class="$style.title">
      {{ title }}
    </p>
    <p :class="$style.question">
      {{ question }}
    </p>
  </div>
</template>

<script lang="ts">
import {  defineComponent,  } from "vue";

export default defineComponent({
  name: "Message",

  props: {
    title: {
      type: String,
      default: ''
    },
    question: {
      type: String,
      default: ''
    }
  },

  setup() {
    
    return {
    };
  },
});
</script>

<style lang="scss" module>
.container {
  margin-top: 54px;
}

.title {
  @include typo-body;
  color: $cactus;
  text-transform: uppercase;
}

.question {
  @include typo-body;
  margin-top: 24px;
}

</style>
