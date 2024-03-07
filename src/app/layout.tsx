import '@/shared/lib/styles/globals.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

import { Metadata } from 'next'
import Head from 'next/head'
import { PrimeReactProvider } from 'primereact/api'
import { FC, PropsWithChildren, useMemo } from 'react'

import StyledComponentsProvider from '@/app/providers/StyledComponentsProvider'

export const metadata: Metadata = {
  description: 'Корпоративный стартер для проекта на NextJS',
  title: 'Next 14 starter',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const value = useMemo(() => {
    return { ripple: true }
  }, [])

  return (
    <html lang='ru'>
      <Head>
        <title>{metadata.title as string}</title>
      </Head>
      <body>
        <StyledComponentsProvider>
          <PrimeReactProvider value={value}>{children}</PrimeReactProvider>
        </StyledComponentsProvider>
      </body>
    </html>
  )
}

export default RootLayout
