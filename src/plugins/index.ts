import { install as installComponents } from './globalComponents.plugin'

export const installPlugins = (app: any): void => {
  const plugins = [
    installComponents
  ]

  plugins.forEach(plugin => app.use(plugin))
}