import { defineAsyncComponent } from 'vue'

export default {
  WelcomeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/WelcomeStep'))
  },
  RegimeStep: {
    component: defineAsyncComponent(() => import('./components/_Steps/RegimeStep'))
  },
  RegimeStep2: {
    component: defineAsyncComponent(() => import('./components/_Steps/RegimeStep2'))
  }
}