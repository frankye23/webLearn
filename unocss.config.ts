import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { presetOnu } from 'onu-ui'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetOnu(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
