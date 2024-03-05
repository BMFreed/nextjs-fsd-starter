'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { FC, PropsWithChildren, useCallback, useRef } from 'react'
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components'

import { GlobalStyles } from '@/shared/lib/styles/GlobalStyles'
import { theme } from '@/shared/lib/styles/theme'

const StyledComponentsProvider: FC<PropsWithChildren> = ({ children }) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const styledComponentsStyleSheetRef = useRef(new ServerStyleSheet())

  useServerInsertedHTML(
    useCallback(() => {
      const styles = styledComponentsStyleSheetRef.current.getStyleElement()

      styledComponentsStyleSheetRef.current.instance.clearTag()

      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <>{styles}</>
    }, []),
  )

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheetRef.current.instance}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleSheetManager>
  )
}

export default StyledComponentsProvider
