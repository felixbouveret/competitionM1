<template>
  <div>
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
import { computed, defineComponent, PropType  } from "vue";

export default defineComponent({
  name: "Progression",

  props: {
    progression: {
      type: Object as PropType<any>,
      default: ():any => ({})
    },
  },

  setup(props) {
    const progressionTmp = computed(() => props.progression.current * 100 / props.progression.max)

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

  transition: width 0.3s;
}
</style>
