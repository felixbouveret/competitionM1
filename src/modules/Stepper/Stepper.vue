<template>
  <section :class="$style.container">
    <Header @go-back="goBack()" />
    <transition name="fade-in">
      <components 
        :is="currentStep.component"
        :class="$style.steps" 
        :progression="progression"
        @next-step="onNextStep()"
      />
    </transition>
    <SubmitButton
      v-if="currentStep.hasNavigation"
      :class="$style.nav"
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
import Header from "./components/Header/Header.vue";

export default defineComponent({
  name: "Stepper",

  components: { SubmitButton, Header },

  setup() {
    const currentStepIndex = ref(0);
    const activeStepName = computed(() => StepsList[currentStepIndex.value]);
    const currentStep = computed(() => StepDefinitions[activeStepName.value]);

    const onNextStep = () => {
      currentStepIndex.value++;
    };
    const goBack = () => {
      currentStepIndex.value--;
    };

    const progression = computed(() => {
      if(currentStep.value.hasNavigation) return currentStep.value.progression
      return null
    });

    return {
      goBack,
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  overflow-y: hidden;

  background-color: $cream;
}

.steps {
  flex-grow: 1;
}

</style>
<style>
.fade-in-enter-active {
  transition: all 0.5s ease;
}

.fade-in-leave-active {
  transition: all 0.5s 0.5 ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>