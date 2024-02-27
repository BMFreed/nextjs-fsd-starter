import { Metadata } from 'next'
import { FC, PropsWithChildren, useMemo } from 'react'
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir'

export const metadata: Metadata = {
  description: 'Корпоративный стартер для проекта на NextJS',
  title: 'Next 14 starter',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const options = useMemo(() => {
    return { key: 'css' }
  }, [])

  return (
    <html lang='ru'>
      <head>
        <title>{metadata.title as string}</title>
      </head>
      <body>
        <NextAppDirEmotionCacheProvider options={options}>
          {children}
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
