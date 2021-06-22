<template>
  <div :class="$style.container"> 
    <transition-group
      name="list"
      tag="div"
    >
      <div
        v-for="({
          step,
          title,
          description,
          img
        }, index) in items"
        v-show="activeSlide === index"
        :key="index.toString()"
        :class="$style.item"
      >
        <div :class="$style.content">
          <p :class="$style.index">
            0{{ index + 1 }}
          </p>
          <h3 :class="$style.title">
            {{ title }}
          </h3>
          <div :class="$style.infos">
            <p :class="$style.step">
              {{ step }}
            </p>
            <div :class="$style.right">
              <p :class="$style.description">
                {{ description }}
              </p>
              <Button :class="$style.button"> 
                Réserver mon chef !
              </Button>
            </div>
          </div>
        </div>
        <div :class="$style.view">
          <img
            :src="img"
            :alt="step"
          >
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType } from 'vue'
import Button from '@/components/Button/Button.vue'

export default defineComponent({
  name: 'ChiefNav',

  components: {
    Button
  },

  props: {
    items: {
      type: Array as PropType<any>,
      default: () => []
    },
    activeSlide: {
      type: Number,
      default: 0
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
  justify-content: space-around;
  width: 100%;
}

.content {
  flex-shrink: 3;
}

.index,
.step {
  @include typo-headline;
  flex-shrink: 0;

  color: $mustard;
}

.index {
  margin-bottom: 16px;
}

.item {
  display: flex;
  gap: 54px;
  align-items: center;
  justify-content: space-between;
  padding: 130px 0;
}

.title {
  @include typo-title;
  margin-bottom: 64px;

  color: $cactus;

  @media only screen and (min-width: 800) {
    @include typo-big-title;
  }
}

.infos {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media only screen and (min-width: 1120px) {
    flex-direction: row;
    gap: 54px;
  }
}

.right {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}

.description {
  min-width: 0;
}

.button {
  grid-column: 2;
}

.view {

  display: none;

  @media only screen and (min-width: 800px) {
    display: block;
    flex-shrink: 1;

    img {
      width: 100%;
      max-height: 430px;
    }
  }
}
</style>

<style>
/* .list-enter-active {
  transition: all 0.5s 0.5s ease;
}

.list-leave-active {
  position: absolute;

  transition: all 0.5s 0 ease;
}

.list-enter-from {
  transform: translateY(8px);
  opacity: 0;

  transition: all 0.5s ease;
}

.list-leave-to {

  transform: translateY(8px);
  opacity: 0;

  transition: all 0.5s  ease;
} */
</style>
