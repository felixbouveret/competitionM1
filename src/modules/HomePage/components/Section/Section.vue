<template>
  <section :class="$style.sectiongreen">
    <Wrapper :class="$style.wrappercustomsection">
      <h3 :class="$style.sectiongreenh3">
        VOTRE MENU<br> DE La SEMAINE
      </h3>
      <p :class="$style.sectiongreentext">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown.
      </p>
      <Button
        is-light
        :class="$style.sectiongreenbtn"
      >
        EN SAVOIR PLUS
      </Button>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Button  from '@/components/Button/Button.vue'

export default defineComponent({
  name: 'Section',

  components: {
    Button,
  },
})
</script>

<style lang="scss" module>
.sectiongreen {
  width: 100vw;
  height: 100vh;
  padding: 120px 20px 20px 20px;

  background-color: #20332b;
}

.wrappercustomsection {
  text-align: center;
}

.sectiongreenh3 {
  @include typo-big-title;

  color: white;
  text-align: center;
  text-transform: uppercase;
}

.sectiongreentext {
  @include typo-body;
  max-width: 451px;
  margin: auto;

  padding-top: 30px;

  color: white;
}

.sectiongreenbtn {
  margin-top: 35px;
}

@media (max-width: 720px) {
  .sectiongreenh3 {
    font-size: 40px;
  }
}
</style>

