import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  description: 'Корпоративный стартер для проекта на NextJS',
  title: 'Next 14 starter',
}

export default RootLayout
