<template>
  <section :class="$style.container">
    <components 
      :is="currentStep.component" 
      :progression="progression"
      @next-step="onNextStep()"
    />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, } from "vue";
import StepsList from './stepsList'
import StepDefinitions from './stepsDefinitions'

export default defineComponent({
  name: "Stepper",

  setup() {
    const currentStepIndex = ref(0);
    const activeStepName = computed(() => StepsList[currentStepIndex.value]);
    const currentStep = computed(() => StepDefinitions[activeStepName.value]);
    const onNextStep = () => {
      currentStepIndex.value++;
    };
    const progression = computed(() => ({
      current: currentStepIndex.value + 1,
      max: StepsList.length
    }));
    return {
      onNextStep,
      currentStep,
      currentStepIndex,
      activeStepName,
      progression
    };
  },
});
</script>

<style lang="scss" module>
.container {
  min-height: 100vh;

  background-color: $cream;
}
</style>