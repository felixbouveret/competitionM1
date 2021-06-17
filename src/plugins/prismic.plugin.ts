import PrismicVue from '@prismicio/vue'
import linkResolver from '../utils/link-resolver'

const accessToken = '' // Leave empty if your repo is public
const endpoint = 'https://competitionm1.cdn.prismic.io/api/v2'

export const install = (app: any): void => {
  app.use(PrismicVue, {
    endpoint,
    apiOptions: { accessToken },
    linkResolver
  })
}