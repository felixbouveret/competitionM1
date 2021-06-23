<template>
  <div :class="$style.onboarding">
    <Stepper />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Stepper from '@/modules/Stepper/Stepper.vue'

export default defineComponent({
  name: 'OnboardingPage',
  components: {
    Stepper
  }
})
</script>

<style lang="scss" module>
.onboarding {
  height: 100vh;
}
</style>