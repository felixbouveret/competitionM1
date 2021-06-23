<template>
  <Mobile
    :class="$style.mobile"
    @next-step="$emit('next-step')"
  />
  <Desktop
    :class="$style.desktop"
    @next-step="$emit('next-step')"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Mobile from "./components/Mobile/Mobile.vue";
import Desktop from "./components/Desktop/Desktop.vue";

export default defineComponent({
  name: "WelcomeStep",
  
  components: {
    Mobile,
    Desktop
},

  emits: ['next-step'],

  setup() {
    
    return {
    };
  },
});
</script>

<style lang="scss" module>
.mobile {
  @media only screen and (min-width: 720px) {
    display: none;
  }
}

.desktop {
  display: none;

  @media only screen and (min-width: 720px) {
    display: flex;
  }
}
</style>
