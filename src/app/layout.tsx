import { ReactNode } from 'react'
import StyledComponentsRegistry from './lib/registry'
import GlobalStyles from './styles/GlobalStyles'
import QueryProvider from './lib/queryProvider'
import { Inter_Tight as Inter } from 'next/font/google'
import Header from './components/home-components/home-layout-components/Header'
import AnimatedDiv from './components/home-components/home-layout-components/AnimatedLogo'
import MainNav from './components/home-components/home-layout-components/MainNav'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Petz - Centro Pokémon',
  description: 'Teste Frontend React / Next - Petz',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <QueryProvider>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <body className={`${inter.variable}`}>
            <div>
              <div>
                <Header>
                  <AnimatedDiv />
                  <MainNav />
                </Header>
              </div>
              {children}
            </div>
          </body>
        </StyledComponentsRegistry>
      </QueryProvider>
    </html>
  )
}
