<template>
  <section :class="$style.sectiondouble">
    <div>
      <img
        :class="$style.imagegauche"
        :src="Decoupe"
      >

      <div :class="$style.sectiongaucheint">
        <h3 :class="$style.h3left">
          Economisez 1 heure de votre temps tous les jours
        </h3>
        <div :class="$style.sectiongaucheintint">
          <p>
            1 heure, c’est le temps moyen que vous passez en cuisine
            quotidiennement. Ne réfléchissez plus à vos repas et gagnez du temps
            sur vos courses, votre cuisine et la vaisselle grâce à Persil &
            Romarin.
          </p>
          <Button :class="$style.sectiondoublebtn">
            Réserver mon chef !
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button/Button.vue";
import Decoupe from "../../assets/decoupe.png"
export default defineComponent({
  name: "Sectiondouble",

  components: {
    Button,
  },
  setup(){
    return{Decoupe}
  }
});
</script>

<style lang="scss" module>
.sectiondouble {
  width: 100vw;
  height: 100vh;

  background-color: #f4eee7;
}

.sectiongaucheint {
  position: relative;

  float: right;
  width: 55vw;
  height: 100vh;
  padding: 50px;
}

.sectiongaucheintint {
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

.sectiongaucheintint > p {
  width: 313px;

  text-align: left;
}

.sectiondoublebtn {
  position: relative;
  left: 0;

  float: left;
  margin-top: 35px;
}

.imagegauche {
  position: relative;
  left: 0;

  float: left;
  width: 45vw;
  height: 100vh;
}

@media (max-width: 720px) {
  .sectiongaucheint {
    width: 100vw;
  }

  .imagegauche {
    width: 100vw;
    height: auto;
  }

  .sectiongaucheintint {
    width: 100%;
    margin-left: 0;
  }

  .sectiondouble {
    height: auto;
  }

  .h3left {
    font-size: 30px;
    line-height: 50px;
  }
}
</style>

