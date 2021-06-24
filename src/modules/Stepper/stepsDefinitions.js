import { defineAsyncComponent } from 'vue'

import sideImage1 from './assets/sideImage1.png'
import sideImage2 from './assets/sideImage2.png'

export default {
  WelcomeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/WelcomeStep')),
    isTransparent: true
  },
  RegimeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/RegimeStep')),
    hasNavigation: true,
    progression: {
      current: 1,
      max: 6
    },
    sideImage: sideImage1
  },
  MangerCKoiStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/MangerCKoiStep')),
    hasNavigation: true,
    progression: {
      current: 2,
      max: 6
    },
    sideImage: sideImage2
  },
  TuEsQuiStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/TuEsQuiStep')),
    hasNavigation: true,
    progression: {
      current: 3,
      max: 6
    },
    sideImage: sideImage1
  },
  MatineeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/MatineeStep')),
    hasNavigation: true,
    progression: {
      current: 4,
      max: 6
    },
    sideImage: sideImage2
  },
  DestinationStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/DestinationStep')),
    hasNavigation: true,
    progression: {
      current: 5,
      max: 6
    },
    sideImage: sideImage1
  },
  SavoirStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/SavoirStep')),
    hasNavigation: true,
    progression: {
      current: 6,
      max: 6
    },
    sideImage: sideImage1
  },
  EmailStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/EmailStep')),
    sideImage: sideImage2
  },
  ResultsStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/ResultsStep')),
  },
  Loader: {
    component: defineAsyncComponent(() => import('./components/_Steps/Loader')),
  }
}