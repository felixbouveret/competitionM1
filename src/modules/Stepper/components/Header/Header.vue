<template>
  <div :class="$style.container">
    <Wrapper>
      <button
        @click="$emit('go-back')"
      >
        Back
      </button>
      <img
        :class="$style.logo"
        :src="Logo"
        alt=""
      >
    </Wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType  } from "vue";
import Logo from '@/assets/logo-cactus.svg'

export default defineComponent({
  name: "Progression",
  props: {
    progression: {
      type: Object as PropType<any>,
      default: (): any => ({})
    },
  },
  emits: ["go-back"],
  setup() {
    return {
      Logo
    };
  },
});
</script>

<style lang="scss" module>
.container {
  position: relative;

  padding: 20px;
  border-bottom: 1px solid $cactus;
}

.logo {
  position: absolute;
  left: 50%;

  width: 76px;

  transform: translateX(-50%);
}
</style>
