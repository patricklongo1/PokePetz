import './globals.css'
import { ReactNode } from 'react'
import { Inter_Tight as Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Petz - Centro Pokémon',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <div>
          <div>
            <h1>Layout</h1>{' '}
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
