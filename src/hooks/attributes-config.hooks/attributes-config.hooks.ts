import { App, inject, InjectionKey } from 'vue'

interface IAttributesConfigItem {
  layerName: string
  fields?: {
    name: string
    alias: string
    type?: string
  }[]
  exclude?: string[]
}

type IAttributesConfig = IAttributesConfigItem[]

const SYMBOL_KEY: InjectionKey<IAttributesConfig> = Symbol()

export function createAttributes (attributes: IAttributesConfig) : { install (app: App) : void } {

  return {
    install (app) {
      app.provide(SYMBOL_KEY, attributes)
    }
  }
}

export function useAttributes () : IAttributesConfig {
  return inject(SYMBOL_KEY) as IAttributesConfig
}