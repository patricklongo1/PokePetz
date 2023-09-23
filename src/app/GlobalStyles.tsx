'use client'
import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
`

const GlobalStyles = createGlobalStyle`
  ${styles}
`

export default GlobalStyles
