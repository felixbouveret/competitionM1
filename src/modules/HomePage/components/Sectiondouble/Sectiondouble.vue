<template>
  <section :class="[$style.container, { [$style.isReverse]: isReverse }]">
    <img
      :class="$style.view"
      :src="data.img"
    >
    <div :class="$style.content">
      <h3 :class="$style.title">
        {{ data.title }}
      </h3>
      <div :class="$style.desc">
        <p>
          {{ data.desc }}
        </p>
        <Button :class="$style.button">
          {{ data.button }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Button from "@/components/Button/Button.vue";

export default defineComponent({
  name: "Sectiondouble",

  components: {
    Button,
  },

  props: {
    isReverse: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object as PropType<any>,
      default: ():any => ({})
    }
  },
  
  setup() {
    return{ }
  }
});
</script>

<style lang="scss" module>
.container {

  background-color: $cream;

  @media only screen and (min-width: 720px) {
    display: flex;
  }

  @media only screen and (min-width: 1200px) {
    height: 100vh;
    min-height: 720px;
    max-height: 1000px;
  }
}

.view {
  width: 100%;
  max-height: 360px;
  object-fit: cover;

  @media only screen and (min-width: 720px) {
    width: 45vw;
    max-height: none;
  }
}

.content {
  max-width: 600px;
  margin: 0 auto;
  padding: 132px 24px;

  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 804px;
  }
}

.desc {
  padding-bottom: 30px;

  & > p {
    margin-top: 32px;
    margin-right: 32px;
    margin-left: 64px;
    padding-bottom: 24px;
    border-bottom: 1px $black solid;

    @media only screen and (min-width: 1200px) {
      max-width: 350px;
      margin: 0;
      border-bottom: 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 80px;
    border-bottom: 1px $black solid;
  }
}

.title {
  @include typo-title;

  color: $cactus;

  @media only screen and (min-width: 1200px) {
    @include typo-big-title;
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

.isReverse {
  .desc > p {
    margin-left: 32px;
  }

  @media only screen and (min-width: 720px) {
    flex-direction: row-reverse;

    .view {
      flex-grow: 1;
    }

    .content {
      width: 45vw;
    }

    .desc {
      max-width: 532px;

      & > p {
        margin-left: 0;
      }
    }

    .title {
      max-width: 804px;
    }
  }
}
</style>

