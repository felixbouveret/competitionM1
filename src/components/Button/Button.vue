<template>
  <a 
    v-if="href"
    :href="href"
    :class="[$style.button, {[$style.isLight]: isLight}]"
  >
    <slot />
  </a>
  <button
    v-else
    :class="[$style.button, {[$style.isLight]: isLight}]"
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
    }
  },

  emits: ['on-click'],
})
</script>

<style lang="scss" module>
  .button {
    padding: 12px;
    background-color: $black;
    border: 0;
    color: $white;
    cursor: pointer;

    @include typo-headline;
  }

  .isLight {
    background-color: $white;
    color: $black;
  }
</style>