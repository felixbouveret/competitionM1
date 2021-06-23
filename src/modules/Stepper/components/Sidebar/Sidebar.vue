<template>
  <div
    :class="$style.container"
    :style="`background-image: url(${image})`"
  >
    <button
      :class="$style.cross"
      @click="router.push('/')"
    >
      <img
        :src="Cross"
        alt=""
      >
    </button>
    <img
      :class="$style.logo"
      :src="Logo"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from '@/assets/logo.svg'
import Cross from '@/assets/icons/cross-icon.svg'
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Sidebar",

  props: {
    image: {
      type: String,
      default: ''
    },
  },

  setup() {
    const router = useRouter()
    return {
      Logo,
      Cross,
      router
    };
  },
});
</script>

<style lang="scss" module>
.container {
  position: relative;

  display: none;

  width: 100%;
  max-width: 350px;

  background-position: top center;
  background-size: cover;

  transition: background-image 0.3s;

  @media only screen and (min-width: 720px) {
    display: block;
  }
}

.logo {
  position: absolute;
  top: 100px;
  left: 50%;

  width: 76px;

  transform: translateX(-50%);
}

.cross {
  position: absolute;
  top: 23px;
  right: 23px;

  padding: 0;
  border: 0;

  background-color: transparent;
  cursor: pointer;
}
</style>
