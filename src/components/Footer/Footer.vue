<template>
  <FooterModule />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterModule from '@/modules/Footer/Footer.vue'

export default defineComponent({
  name: 'Footer',
  
  components: {
    FooterModule
  },
})
</script>

