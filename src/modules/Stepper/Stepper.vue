<template>
  <section :class="[$style.container, {[$style.hasSide]:currentStep.sideImage}]">
    <div :class="$style.inner">
      <Header
        :is-transparent="currentStep.isTransparent"
        @go-back="goBack()"
      />
      <transition name="fade-in">
        <components 
          :is="currentStep.component"
          :class="$style.steps" 
          :progression="progression"
          @next-step="onNextStep()"
          @on-select="selectedValue = $event"
        />
      </transition>
      <SubmitButton
        v-if="currentStep.hasNavigation"
        :progression="progression"
        @submit-button="selectedValue ? onNextStep() : null"
      />
    </div>
    <Sidebar
      v-if="currentStep.sideImage"
      :image="currentStep.sideImage"
    />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, } from "vue";
import StepsList from './stepsList'
import StepDefinitions from './stepsDefinitions'
import SubmitButton from "./components/SubmitButton/SubmitButton.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Header from "./components/Header/Header.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Stepper",

  components: { SubmitButton, Header, Sidebar },

  setup() {
    const router = useRouter()
    const currentStepIndex = ref(0);
    const activeStepName = computed(() => StepsList[currentStepIndex.value]);
    const currentStep = computed(() => StepDefinitions[activeStepName.value]);
    const selectedValue = ref(null)

    const onNextStep = () => {
      selectedValue.value = null
      currentStepIndex.value++;
    };
    const goBack = () => {
      if (!currentStepIndex.value) {
        router.push('/')
      }
      selectedValue.value = null
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
      progression,
      selectedValue
    };
  },
});
</script>

<style lang="scss" module>
.container {
  height: 100%;

  background-color: $cream;

  @media only screen and (min-width: 720px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

@media (min-width: 720px) {
  .hasSide > .inner {
    padding: 40px;
  }
}

.inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

.steps {
  overflow-y: auto;
}

.hasSide {
  .steps {
    max-width: 630px;
  }
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