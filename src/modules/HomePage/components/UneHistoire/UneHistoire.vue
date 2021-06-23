<template>
  <section :class="$style.container">
    <Wrapper :class="$style.inner">
      <img
        :class="$style.view"
        :src="Persil"
      >
      <div :class="$style.content">
        <div>
          <h3 :class="$style.title">
            UNE HISTOIRE <br> D’humains
          </h3>
          <div :class="$style.desc">
            <p>
              Partenaires professionnels depuis bien des années, la solide amitée entre Mayana et Mathieu ont souhaité mettre l’humain au coeur de Persil & Romarin.
            </p>
            <Button :class="$style.button">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
    <Divider
      has-head
      is-green
      is-small
    />
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Divider  from '@/components/Divider/Divider.vue'
import Button  from '@/components/Button/Button.vue';
import Persil from "../../assets/persilromain.webp"

export default defineComponent({
  name: 'UneHistoire',

  components: {
    Button,
    Divider
  },

  setup() {
    return{
      Persil
    }
  }
})
</script>

<style lang="scss" module>
.container {
  position: relative;

  background-color: $cream;

  @media only screen and (min-width: 720px) {
    display: flex;
    align-items: center;
    padding: 120px 24px 270px;
  }

  @media only screen and (min-width: 1200px) {
    min-height: 720px;
    max-height: 1200px;
  }
}

.inner {
  @media only screen and (min-width: 720px) {
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1200px) {
    gap: 64px;
  }
}

.view {
  display: block;
  width: 100%;
  max-width: 375px;
  height: auto;
  margin: 0 auto;

  @media only screen and (min-width: 720px) {
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 650px;
  }
}

.content {
  max-width: 600px;
  margin: 0 auto;
  padding: 132px 24px;

  @media only screen and (min-width: 1200px) {
    align-self: flex-end;
    width: 100%;
    height: 100%;
    padding-bottom: 0;
  }

  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 804px;
  }
}

.desc {
  padding-bottom: 30px;

  @media only screen and (min-width: 1200px) {
    margin-left: 80px;
    border-bottom: 1px $black solid;
  }
}

.title {
  @include typo-big-title;

  color: $cactus;
  font-size: 46px;
  text-align: left;
}

.desc > p {
  margin-top: 32px;
  margin-right: 32px;
  margin-left: 64px;
  padding-bottom: 24px;
  border-bottom: 1px $black solid;

  @media only screen and (min-width: 1200px) {
    max-width: 350px;
    margin: 0;
    margin-top: 64px;
    border-bottom: 0;
  }
}

.button {
  display: block;
  width: 100%;
  max-width: 270px;
  margin: 0 auto;
  margin-top: 42px;

  font-weight: 400;

  font-size: 12px !important;

  @media only screen and (min-width: 1200px) {
    max-width: 350px;
    margin: 0;
  }
}
</style>