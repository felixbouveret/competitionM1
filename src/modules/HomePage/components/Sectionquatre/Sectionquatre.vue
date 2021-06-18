<template>
  <section :class="$style.sectiongreen">
    <Wrapper :class="$style.wrappercustomsection">
      <h4 :class="$style.sectiongreenh4">“UN service de qualité, le plaisir d’échanger avec le cuisinier, les plats préts pour la semaine. Large choix de plats et quatintées satisfaisantes.”</h4>
    </Wrapper>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Button  from '@/components/Button'
export default defineComponent({
  name: 'Sectionquatre',

  components: {
    Button,
  },})
</script>

<style lang="scss" module>
.sectiongreen {
  background-color: #152921;
  width: 100vw;
  padding-top: 120px;
  height: 100vh;
}

.wrappercustomsection {
  text-align: center;
}

.sectiongreenh4 {
  @include typo-title;

  line-height: 31px;
  text-align: center;
  color: #fbfbfb;
  width: 710px;
  margin: auto;
}
</style>