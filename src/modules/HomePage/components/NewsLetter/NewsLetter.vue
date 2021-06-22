<template>
  <section :class="$style.container">
    <Wrapper :class="$style.inner"> 
      <p :class="$style.headline">
        Réservez dès maintenant votre chef
      </p>
      <h2 :class="$style.title">
        Recevez nos actualités
      </h2>
      <form :class="$style.form">
        <input
          :class="$style.input"
          type="text"
          placeholder="EMAIL"
        >
        <Button
          :class="$style.button"
          is-light
        >
          s’inscrire
        </Button>
      </form>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button/Button.vue'

export default defineComponent({
  name: 'NewsLetter',

  components: {
    Button
  }
})
</script>

<style lang="scss" module>
.container {
  padding: 94px 24px 50px;

  background-image: linear-gradient(0deg, rgba(29, 29, 29, 0.3), rgba(29, 29, 29, 0.3)), url('./assets/background.png');
  background-position: center;
  background-size: cover;

  @media only screen and (min-width: 720px) {
    padding: 160px 24px;
  }
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px !important;

  color: $white;
}

.headline {
  @include typo-body;
  font-size: 12px;
  text-transform: uppercase;

  @media only screen and (min-width: 720px) {
    @include typo-body;
  }
}

.title {
  @include typo-headline;
  margin-top: 8px;

  @media only screen and (min-width: 720px) {
    @include typo-title;
    margin-top: 32px;
  }
}

.form {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  padding-bottom: 4px;
  border-bottom: 1px solid $white;

  @media only screen and (min-width: 720px) {
    margin-top: 52px;
  }
}

.button {
  padding-top: 8px;
  padding-bottom: 6px;

  font-size: 12px;
}

.input {
  flex-grow: 1;
  padding: 8px;
  border: 0;

  color: $white;

  background-color: transparent;
  outline: none;

  &::placeholder {
    color: $white;
  }
}
</style>