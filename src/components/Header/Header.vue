<template>
  <HeaderModule />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderModule from '@/modules/Header/Header.vue'

export default defineComponent({
  name: 'Header',
  
  components: {
    HeaderModule
  },
})
</script>

