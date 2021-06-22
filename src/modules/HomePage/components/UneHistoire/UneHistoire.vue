<template>
  <section :class="$style.histoireback">
    <Wrapper>
      <div :class="$style.histoirecentre">
        <div :class="$style.histoiregauche">
          <img :src="Persil">
        </div>
        <div :class="$style.histoiredroite">
          <div>
            <h3 :class="$style.h3left">
              UNE HISTOIRE <br> D’humains
            </h3>
            <p :class="$style.texthistoire">
              1 heure, c’est le temps moyen que vous passez en cuisine
              quotidiennement. Ne réfléchissez plus à vos repas et gagnez du temps
              sur vos courses, votre cuisine et la vaisselle grâce à Persil &
              Romarin.
            </p>
            <Button>
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Button  from '@/components/Button/Button.vue';
import Persil from "../../assets/persilromain.png"
export default defineComponent({
  name: 'UneHistoire',

  components: {
    Button,
  },
  setup(){
    return{Persil}
  }})
</script>

<style lang="scss" module>
.histoireback {
  height: 100vh;

  background-color: #f4eee7;
}

.texthistoire {
  max-width: 50%;
}

.histoirecentre {
  height: 503px;
  margin: auto;
  padding: 10%;

  text-align: center;
}

.histoiregauche {
  float: left;
  height: 503px;

  & > img {
    width: 420px;

    background-color: #20332b;
  }
}

.histoiredroite {
  position: relative;
  bottom: 0;

  float: right;
  width: 50%;
  height: 503px;

  padding-bottom: 30px;
  border-bottom: 2px solid #20332b;

  & > div {
    position: absolute;
    bottom: 40px;
  }

  & > div > p {
    margin-top: 30px;

    text-align: left;
  }

  & > div > button {
    float: left;
    margin-top: 30px;
  }
}

.h3left {
  @include typo-big-title;

  color: #175b06;
  font-size: 46px;
  text-align: left;
  text-transform: uppercase;
}

@media only screen and (max-width: 720px) {
  .histoiredroite {
    position: inherit;
    bottom: 0;

    float: inherit;

    width: 100%;
    height: 440px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    border-bottom: 2px solid #20332b;

    & > div {
      position: inherit;
      bottom: 40px;

      width: 100%;
    }
  }

  .histoiregauche {
    float: none;

    & > img {
      float: none;
      width: 100vw;
    }
  }

  .histoirecentre {
    height: fit-content;
    padding: 0%;
  }

  .histoireback {
    height: auto;

    background-color: #f4eee7;
  }
}
</style>