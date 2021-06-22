<template>
  <section :class="$style.sectiondoubled">
    <div>
      <img
        :class="$style.imagedroitehidden"
        :src="Champignon"
      >
      <div :class="$style.sectiondroiteint">
        <h3 :class="$style.h3left">
          Vos repas sains et équilibrés personnalisables à volonté
        </h3>
        <div :class="$style.sectiondroiteintint">
          <p>
            Les recettes proposées par Persil & Romarin sont élaborées avec nos chefs et notre diététicienne pour vous garantir le goût et la ligne.
            Personnalisez à volonté vos repas : vous ne voulez pas de brocolis, moins de sel, plus épicé, sans gluten ou sans sucre ?
          </p>
          <Button :class="$style.sectiondoublebtn">
            EN SAVOIR PLUS
          </Button>
        </div>
      </div>
      <img
        :class="$style.imagedroite"
        :src="Champignon"
      >
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button/Button.vue";
import Champignon from "../../assets/champignon.png"

export default defineComponent({
  name: "Sectiondoubled",

  components: {
    Button,
  },
  setup(){
    return{Champignon}
  }
});
</script>

<style lang="scss" module>
.sectiondoubled {
  width: 100vw;
  height: 100vh;

  background-color: #f4eee7;
}

.sectiondroiteint {
  position: relative;

  float: left;
  width: 45vw;
  height: 100vh;
  padding: 50px;
}

.sectiondroiteintint {
  position: absolute;
  bottom: 91px;

  width: 70%;
  margin-left: 70px;
  padding-bottom: 30px;
  border-bottom: 1px black solid;
}

.h3left {
  @include typo-big-title;

  color: #175b06;
  font-size: 46px;
  text-align: left;
  text-transform: uppercase;
}

.sectiondroiteintint > p {
  width: 313px;

  text-align: left;
}

.sectiondoublebtn {
  position: relative;
  right: 0;

  float: left;
  margin-top: 35px;
}

.imagedroitehidden {
  display: none;
  height: 100vh;
}

.imagedroite {
  position: relative;
  right: 0;

  float: right;
  width: 55vw;
  height: 100vh;
}

@media (max-width: 720px) {
  .sectiondroiteint {
    width: 100vw;
    padding: 30px;

    background-color: #f4eee7;
  }

  .h3left {

    font-size: 27px;
    line-height: 45px;
  }

  .imagedroitehidden {
    display: block;
    width: 100vw;
    height: auto;
  }

  .imagedroite {
    display: none;
  }

  .sectiondroiteintint {
    width: 100%;
    margin-left: 0;
  }

  .sectiondoubled {
    height: auto;
  }
}

</style>

