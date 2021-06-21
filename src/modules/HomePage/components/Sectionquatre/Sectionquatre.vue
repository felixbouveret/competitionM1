<template>
  <section :class="$style.sectiongreen">
    <Wrapper :class="$style.wrappercustomsection">
      <h4 :class="$style.sectiongreenh4">
        “UN service de qualité, le plaisir d’échanger avec le cuisinier, les plats préts pour la semaine. Large choix de plats et quatintées satisfaisantes.”
      </h4>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Sectionquatre',

})
</script>

<style lang="scss" module>
.sectiongreen {
  width: 100vw;
  height: 100vh;
  padding-top: 120px;

  background-color: #152921;
}

.wrappercustomsection {
  text-align: center;
}

.sectiongreenh4 {
  @include typo-title;
  width: 710px;
  margin: auto;

  color: #fbfbfb;

  line-height: 31px;
  text-align: center;
}
</style>