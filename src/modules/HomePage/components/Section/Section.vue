<template>
  <section :class="$style.sectiongreen">
    <div :class="$style.container">
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
    </div>
    <img
      :class="$style.imagefit"
      :src="Carousel"
    >
    <Divider
      is-top
    />
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Divider  from '@/components/Divider/Divider.vue'
import Button  from '@/components/Button/Button.vue'
import Carousel from "../../assets/carousel.png"

export default defineComponent({
  name: 'Section',

  components: {
    Button,
    Divider
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
}

.sectiongreen {
  position: relative;

  min-height: 100vh;

  background-color: #20332b;
}

.container {
  padding: 220px 20px 20px 20px;
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
    object-fit: cover;
  }
}
</style>

