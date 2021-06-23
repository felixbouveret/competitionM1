<template>
  <div :class="$style.container"> 
    <Message
      :title="title"
      :question="question"
    />
    <SingleChoice
      :items="answers"
      @on-select="$emit('on-select', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import SingleChoice from "../../SingleChoice";
import Message from "../../Message"
import StepData from './StepData'

export default defineComponent({
  name: "SavoirStep",

  components: {
    Message,
    SingleChoice,
  },    

  props: {
    progression: {
      type: Object as PropType<any>,
      default: () => ({})
    }
  },

  emits: ['on-select'],

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
