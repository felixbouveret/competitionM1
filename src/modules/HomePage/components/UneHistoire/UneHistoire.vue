<template>
  <section :class="$style.histoireback">
<Wrapper>
  
</Wrapper>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Button  from '@/components/Button/Button.vue'
export default defineComponent({
  name: 'UneHistoire',

  components: {
    Button,
  },})
</script>

<style lang="scss" module>
.histoireback {
  background-color: #f4eee7;
}
</style>