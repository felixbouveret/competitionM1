<template>
  <section :class="$style.container">
    <components 
      :is="currentStep.component" 
      :progression="progression"
      @next-step="onNextStep()"
    />
    <SubmitButton
      v-if="currentStep.hasNavigation"
      :progression="progression"
      @submit-button="onNextStep()"
    />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, } from "vue";
import StepsList from './stepsList'
import StepDefinitions from './stepsDefinitions'
import SubmitButton from "./components/SubmitButton/SubmitButton.vue";

export default defineComponent({
  name: "Stepper",

  components: { SubmitButton },

  setup() {
    const currentStepIndex = ref(0);
    const activeStepName = computed(() => StepsList[currentStepIndex.value]);
    const currentStep = computed(() => StepDefinitions[activeStepName.value])
    ;
    const onNextStep = () => {
      currentStepIndex.value++;
    };
    const progression = computed(() => ({
      current: currentStepIndex.value,
      max: StepsList.length -1
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