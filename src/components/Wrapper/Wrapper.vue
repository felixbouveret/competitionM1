<template>
  <div :class="$style.inner">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Wrapper',
})
</script>

<style lang="scss" module>
  .inner {
    @include inner;
  }

</style>