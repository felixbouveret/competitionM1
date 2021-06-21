<template>
  <div :class="$style.container">
    <div
      :class="$style.activeBar"
      :style="activeBarStyles"
    />
    <button
      v-for="({menuText}, itemId) in items"
      :key="itemId.toString()"
      :class="$style.button"
      @click="setActiveId(itemId)"
    >
      <span :ref="btn => { buttons[itemId] = btn }">
        {{ menuText }}
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ChiefNav',

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  emits: ['on-set-active-id'],
  
  setup (props, { emit }) {
    const activeId = ref(0)
    const buttons = ref([])

    const setActiveId = (id) => {
      activeId.value = id
      emit('on-set-active-id', id)
    }

    const activeButton = computed(() :any => buttons.value[activeId.value])
    
    const activeBarStyles = computed(() => {
      const left = activeButton.value?.offsetLeft  || '0'
      const width = activeButton.value?.offsetWidth || '0'
      return `left: ${left}px; width: ${width}px`
    })

    console.log(activeButton);
    

    return { 
      buttons,
      setActiveId,
      activeId,
      activeBarStyles
    }
  }
})
</script>

<style lang="scss" module>
.container {
  position: relative;

  display: flex;

  width: 100%;
  padding: 0 24px;

  border-bottom: solid 1px #cbcbcbcb;
  overflow-x: scroll;

  @media (min-width: 720px) {
    justify-content: space-around;
    padding: 0;
  }
}

.button {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 16px;
  border: 0;

  color: $cactus;
  text-transform: uppercase;

  background-color: transparent;
  cursor: pointer;

  @include typo-body;

  @media (min-width: 720px) {
    padding: 24px;

    @include typo-headline;
  }
}

.activeBar {
  position: absolute;
  bottom: 0;

  width: 100px;

  height: 2px;

  background-color: $mustard;

  transition-duration: 0.3s;

  transition-property: width, left;
}
</style>
