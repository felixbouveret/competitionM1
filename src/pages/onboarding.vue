<template>
  <h1 :class="$style.title">
    Onboarding
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OnboardingPage',
})
</script>

<style lang="scss" module>
.title {
  @include typo-title;
}
</style>