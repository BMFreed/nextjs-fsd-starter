import 'styled-components'
import { theme } from '@/shared/lib/styles/theme'

// and extend them!
declare module 'styled-components' {
  export type DefaultTheme = typeof theme
}
