<template>
  <div :class="$style.container">
    <img
      :src="Logo"
      alt=""
    >
    <div :class="$style.spinner" />
    <p :class="$style.text">
      Veuillez patienter...
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Logo from '@/assets/logo-cactus.svg'

export default defineComponent({
  name: "WelcomeStep",
  
  emits: ['next-step'],

  setup(props, {emit}) {
    onMounted(()=> {
      setTimeout(() => emit('next-step'), 2000)
    })
    return {
      Logo
    };
  },
});
</script>

<style lang="scss" module>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 80px;

  @media only screen and (min-width: 720px) {
    margin-top: 0;
  }
}

.spinner {
  width: 32px;
  height: 32px;
  margin-top: 24px;
  border: solid 2px $cactus;
  border-bottom-color: transparent;
  border-radius: 32px;

  animation: spinner 1s linear infinite;
}

.text {
  margin-top: 32px;
}

@keyframes spinner {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
