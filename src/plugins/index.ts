import { install as installPrismic } from './prismic.plugin'

export const installPlugins = (app: any): any => {
  const plugins = [
    installPrismic
  ]

  plugins.forEach((plugin) => app.use(plugin))
}