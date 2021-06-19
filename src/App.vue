<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
@font-face {
  font-family: "TrendSansOne";
  src: url("./assets/fonts/TrendSansOne.otf");
}

@font-face {
  font-weight: 500;
  font-family: "Karla";
  src: url("./assets/fonts/Karla-Medium.ttf") format("truetype");
}

@font-face {
  font-weight: 400;
  font-family: "Karla";
  src: url("./assets/fonts/Karla-Regular.ttf") format("truetype");
}
</style>
