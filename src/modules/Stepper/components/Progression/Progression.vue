<template>
  <div :class="$style.container">
    <p :class="$style.text">
      {{ `${progression.current} sur ${progression.max}` }}
    </p>
    <div :class="$style.progressContainer">
      <span
        :class="$style.progress"
        :style="`width: ${progressionTmp}%`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "Progression",

  props: {
    progression: {
      type: Object as PropType<any>,
      default: ():any => ({})
    },
  },

  setup(props) {
    const progressStep = ref(props.progression)
    const progressionTmp = computed(() => progressStep.value.current * 100 / progressStep.value.max)

    return {
      progressionTmp
    };
  },
});
</script>

<style lang="scss" module>
.text {
  text-align: right;
}

.progressContainer {
  width: 100%;
  height: 4px;
  margin-top: 12px;

  background-color: #ddd;
}

.progress {
  display: block;
  height: 100%;

  background-color: $cactus;
}
</style>
