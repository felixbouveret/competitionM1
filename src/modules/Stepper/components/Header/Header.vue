<template>
  <div :class="[$style.container,{[$style.isTransparent]:isTransparent}]">
    <Wrapper :class="$style.inner">
      <button
        :class="$style.button"
        @click="$emit('go-back')"
      >
        <img
          :src="isTransparent ? BackArrowWhite : BackArrow"
        >
      </button>
      <img
        :class="$style.logo"
        :src="isTransparent ? Logo : LogoCactus"
        alt=""
      >
    </Wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoCactus from '@/assets/logo-cactus.svg'
import Logo from '@/assets/logo.svg'
import BackArrow from '@/assets/icons/back-arrow.svg'
import BackArrowWhite from '@/assets/icons/back-arrow-white.svg'

export default defineComponent({
  name: "Header",

  props: {
    isTransparent: {
      type: Boolean,
      default: false
    },
  },

  emits: ["go-back"],
  
  setup() {
    return {
      LogoCactus,
      Logo,
      BackArrow,
      BackArrowWhite
    };
  },
});
</script>

<style lang="scss" module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  width: 100%;

  padding: 20px;
  border-bottom: 1px solid $cactus;

  background-color: $cream;

  @media only screen and (min-width: 720px) {
    display: none;
  }
}

.inner {
  display: flex;
  align-items: center;
}

.isTransparent {

  border-bottom-color: $white;

  background-color: rgba($color: $white, $alpha: 0.5);
  backdrop-filter: blur(8px);
}

.logo {
  position: absolute;
  left: 50%;

  width: 76px;

  transform: translateX(-50%);
}

.button {
  padding: 0;
  border: 0;

  background-color: transparent;
  cursor: pointer;

  img {
    display: block;
  }
}
</style>
