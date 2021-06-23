<template>
  <div :class="$style.container"> 
    <button
      v-for="({data, text}, itemId) in items"
      :key="itemId.toString()"
      :class="[$style.button, {[$style.isSelected]: isSelected(itemId)}]"
      @click="selectOption(data)"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import {  defineComponent, PropType, ref  } from "vue";

export default defineComponent({
  name: "MultipleChoice",

  props: {
    items: {
      type: Array as PropType<any>,
      default: ():any => []
    },
  },

  emits: ['on-select'],

  setup(props, { emit }) {
    const selectedOption = ref(null)
    const items = ref(props.items)

    const selectOption = (option) => {
      selectedOption.value = option 
      emit('on-select', option)
    }
    const isSelected = (id) => {  
      return items.value[id].data === selectedOption.value
    }
    return {
      selectOption,
      isSelected
    };
  },
});
</script>

<style lang="scss" module>
.container {
  margin-top: 54px;

  @media only screen and (min-width: 720px) {
    margin-left: 40px;
  }
}

.button {
  display: block;
  width: 100%;
  padding: 16px;
  border: solid 1px $black;

  background-color: transparent;
  cursor: pointer;

  @include typo-body;

  &:not(:first-child) {
    margin-top: 16px;
  }
}

.isSelected {
  color: $white;

  background-color: $black;
}

</style>
