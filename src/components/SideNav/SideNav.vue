<template>
  <SideNavModule />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideNavModule from '@/modules/SideNav/SideNav.vue'

export default defineComponent({
  name: 'SideNav',
  
  components: {
    SideNavModule
  },
})
</script>

