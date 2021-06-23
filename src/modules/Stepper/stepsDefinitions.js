import { defineAsyncComponent } from 'vue'

export default {
  WelcomeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/WelcomeStep'))
  },
  RegimeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/RegimeStep')),
    hasNavigation: true,
    progression: {
      current: 1,
      max: 6
    }
  },
  MangerCKoiStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/MangerCKoiStep')),
    hasNavigation: true,
    progression: {
      current: 2,
      max: 6
    }
  },
  TuEsQuiStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/TuEsQuiStep')),
    hasNavigation: true,
    progression: {
      current: 3,
      max: 6
    }
  },
  MatineeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/MatineeStep')),
    hasNavigation: true,
    progression: {
      current: 4,
      max: 6
    }
  },
  DestinationStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/DestinationStep')),
    hasNavigation: true,
    progression: {
      current: 5,
      max: 6
    }
  },
  SavoirStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/SavoirStep')),
    hasNavigation: true,
    progression: {
      current: 6,
      max: 6
    }
  }
}