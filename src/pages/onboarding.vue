<template>
  <Stepper />
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
