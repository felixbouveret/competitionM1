<template>
  <div :class="$style.container"> 
    <button
      v-for="({data, text}, itemId) in items"
      :key="itemId.toString()"
      :class="[$style.button, {[$style.isSelected]: isSelected(itemId)}]"
      @click="selectOption(data)"
    >
      <div :class="$style.dot" />
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

  setup(props) {
    const selectedOption = ref<any>([])
    const items = ref(props.items)

    const selectOption = (option) => {
      if(selectedOption.value.includes(option)) {
        const optionIndex = selectedOption.value.indexOf(option);
        selectedOption.value.splice(optionIndex, 1)
      } else {
        selectedOption.value.push(option) 
      }
    }
    
    const isSelected = (id) => {  
      return selectedOption.value.includes(items.value[id].data)
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
}

.button {
  position: relative;

  display: block;
  width: 100%;
  padding: 16px;
  padding-left: 50px;
  border: 0;

  text-align: left;

  background-color: transparent;
  cursor: pointer;

  @include typo-body;

  &:not(:first-child) {
    margin-top: 16px;
  }
}

.dot {
  position: absolute;
  top: 11px;
  left: 0;

  width: 30px;
  height: 30px;
  border: solid 1px $black;
  border-radius: 16px;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 12px;
    height: 12px;
    border-radius: 10px;

    background-color: $black;
    transform: translate(-50%, -50%);
    opacity: 0;

    transition-duration: 0.3s;

    transition-property: width, height, opacity;

    content: '';
  }
}

.isSelected {
  .dot::before {
    width: 18px;
    height: 18px;

    opacity: 1;
  }
}
</style>
