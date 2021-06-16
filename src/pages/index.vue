<template>
  <HomeModule />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeModule from '../modules/HomePage'

export default defineComponent({
  name: 'HomePage',

  components: {
    HomeModule
  }
})
</script>
