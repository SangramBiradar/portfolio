import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "/Users/tanishq_rocks/Desktop/ADResume/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}