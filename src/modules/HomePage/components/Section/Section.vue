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
    <img :class="$style.imagefit" :src="Carousel">
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Button  from '@/components/Button/Button.vue'
import Carousel from "../../assets/carousel.png"

export default defineComponent({
  name: 'Section',

  components: {
    Button,
  },
  setup(){
    return{Carousel}
  }
})
</script>

<style lang="scss" module>

.imagefit {
  min-width: 100vw;
  max-height: 496px;
  margin-top: 147px;
  margin-bottom: 54px;
  margin-left: -20px;
}

.sectiongreen {
  width: 100vw;
  min-height: 100vh;
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

@media only screen and (max-width: 720px) {
  .sectiongreenh3 {
    font-size: 40px;
  }

  .imagefit {
    width: 100vw;
    height: 360px;
    margin-top: 44px;
    margin-bottom: 24px;
    margin-left: -20px;
    object-fit: cover;
  }
}
</style>

