<template>
  <section :class="$style.sectiongreen">
    <Wrapper>
      <h3 :class="$style.sectiongreenh3">VOTRE MENU<br> DE La SEMAINE</h3>
      <p :class="$style.sectiongreentext">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown.
      </p>
      <Button is-light :class="$style.sectiongreenbtn">EN SAVOIR PLUS</Button>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Button  from '@/components/Button'
export default defineComponent({
  name: 'Section',

  components: {
    Button,
  },})
</script>

<style lang="scss" module>
.sectiongreen {
  background-color: #152921;
  width: 100vw;
  padding-top: 120px;
  height: 100vh;
}

.sectiongreenh3 {
  @include typo-big-title;

  color: white;
  text-transform: uppercase;
  text-align: center;
}

.sectiongreentext {
  @include typo-body;

  padding-top: 30px;
  max-width: 451px;
  margin: auto;
  color: white;
}

.sectiongreenbtn {
  margin-top: 35px;
}
</style>

