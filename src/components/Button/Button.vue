<template>
  <a 
    v-if="href"
    :href="href"
    :class="[
      $style.button, 
      {[$style.isLight]: isLight},
      {[$style.isWired]: isWired},
      {[$style.isGreen]: isGreen},
    ]"
  >
    <slot />
  </a>
  <button
    v-else
    :class="[
      $style.button, 
      {[$style.isLight]: isLight},
      {[$style.isWired]: isWired},
      {[$style.isGreen]: isGreen},
    ]"
    @click="()=>$emit('on-click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',

  props: {
    href: {
      type: String,
      default: ''
    },
    isLight: {
      type: Boolean,
      default: false
    },
    isWired: {
      type: Boolean,
      default: false
    },
    isGreen: {
      type: Boolean,
      default: false
    }
  },

  emits: ['on-click'],
})
</script>

<style lang="scss" module>
  .button {
    padding: 14px 35px 11px 35px;
    border: 0;

    color: $white;
    font-size: 16px !important;

    background-color: $black;
    cursor: pointer;

    @include typo-headline;
  }

  .isLight {
    color: $black;

    background-color: $white;
  }

  .isWired {
    padding: 14px 35px 14px 35px;
    border: solid 1px $black;

    color: $black;

    background-color: transparent;

    @include typo-body;
  }

  .isGreen {
    padding: 10px 35px 10px 35px;

    color: $white;

    background-color: $cactus;

    @include typo-body;
  }
</style>