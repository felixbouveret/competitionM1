<template>
  <div
    :class="[
      $style.divider,
      {[$style.isTop]: isTop},
      {[$style.isGreen]: isGreen},
      {[$style.hasHead]: hasHead},
      {[$style.isSmall]: isSmall},
    ]"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Divider',

  props: {
    isTail: {
      type: Boolean,
      default: false
    },
    isTop: {
      type: Boolean,
      default: false
    },
    isGreen: {
      type: Boolean,
      default: false
    },
    hasHead: {
      type: Boolean,
      default: false
    },
    isSmall: {
      type: Boolean,
      default: false
    },
  },
})
</script>

<style lang="scss" module>
.divider {
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 4;

  display: none;

  width: 1px;

  height: 108px;

  background-color: $white;
  transform: translateX(-50%);

  @media only screen and (min-width: 720px) {
    display: block;
  }
}

.hasHead {
  &::before {
    position: absolute;
    top: 0;
    left: 50%;

    width: 149px;
    height: 1px;

    background-color: $white;
    transform: translateX(-50%);

    content: '';
  }
}

.isTop {
  top: 0;
  bottom: initial;

  &::before {
    top: initial;
    bottom: 0;
  }
}

.isGreen {
  background-color: $cactus;

  &::before {
    background-color: $cactus;
  }
}

.isSmall {
  height: 82px;
}

</style>