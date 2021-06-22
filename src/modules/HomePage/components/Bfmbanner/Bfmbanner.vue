<template>
  <section :class="$style.bfmback">
<ul :class="$style.bfmul">
<li>Equalité</li>
<li>proximité</li>
<li>adaptable</li>
<li>fraicheur</li>
<li>Eco responsable</li>
<li>qualité</li>
<li>proximité</li>
<li>adaptable</li>
<li>savoir faire</li>
<li>fraicheur</li>
<li>Equalité</li>
<li>proximité</li>
<li>adaptable</li>
<li>fraicheur</li>
<li>Eco responsable</li>
<li>qualité</li>
<li>proximité</li>
<li>adaptable</li>
<li>savoir faire</li>
<li>fraicheur</li>
<li>Equalité</li>
<li>proximité</li>
<li>adaptable</li>
<li>fraicheur</li>
<li>Eco responsable</li>
<li>qualité</li>
<li>proximité</li>
<li>adaptable</li>
<li>savoir faire</li>
<li>fraicheur</li>
  </ul>
<div :class="$style.bfmline"> </div>
</section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Bfmbanner',
})
</script>

<style lang="scss" module>
.bfmback {
  display: inline-block;

  background-color: #f4eee7;
}

.bfmul {
  display: flex;
  gap: 100px;
  padding: 10px 0 7px 0;

  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;

  -webkit-animation: animationframes linear 210s;
  -moz-animation: animationframes linear 210s;
  -o-animation: animationframes linear 210s;
  -ms-animation: animationframes linear 210s;
  animation: animationFrames linear 210s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  & > li {
    @include typo-big-title;
    min-width: fit-content;

    color: #175b06;
    font-size: 40px;
  }
}

.bfmline {
  width: 100vw;
  height: 2px;

  background-color: #175b06;
}

@keyframes animationFrames {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-7200px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@-moz-keyframes animationFrames {
  0% {
    -moz-transform: translate(0, 0);
  }

  50% {
    transform: translate(-7200px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@-webkit-keyframes animationFrames {
  0% {
    -webkit-transform: translate(0, 0);
  }

  50% {
    transform: translate(-7200px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@-o-keyframes animationFrames {
  0% {
    -o-transform: translate(0, 0);
  }

  50% {
    transform: translate(-7200px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@-ms-keyframes animationFrames {
  0% {
    -ms-transform: translate(0, 0);
  }

  50% {
    transform: translate(-7200px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@media only screen and (max-width: 720px) {
  .bfmul {
    padding: 0;
  }

  .bfmul > li {
    font-size: 40px;
    font-size: 30px;
  }
}
</style>