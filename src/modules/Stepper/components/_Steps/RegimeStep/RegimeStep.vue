<template>
  <div :class="$style.container"> 
    <Message
      :title="title"
      :question="question"
    />
    <SingleChoice
      :items="answers"
      @on-select="seletectedValue = $event"
    />
  </div>
  <SubmitButton
    :progression="{current: 1, max: 6}"
    @submit-button="$emit('next-step')"
  />
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import SingleChoice from "../../SingleChoice";
import Message from "../../Message"
import SubmitButton from "../../SubmitButton"
import StepData from './StepData'

export default defineComponent({
  name: "RegimeStep",

  components: {
    Message,
    SingleChoice,
    SubmitButton
  },    

  props: {
    progression: {
      type: Object as PropType<any>,
      default: () => ({})
    }
  },

  emits: ['next-step'],

  setup() {
    const title = ref(StepData.title)
    const question = ref(StepData.question)
    const answers = ref(StepData.answers)

    const seletectedValue = ref(null)
    return {
      question,
      title,
      answers,
      seletectedValue
    };
  },
});
</script>

<style lang="scss" module>
.container {
  padding: 0 24px;
}
</style>
