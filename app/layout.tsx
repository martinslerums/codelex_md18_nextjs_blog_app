import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'
import Provider from './components/Provider/Provider'
import './globals.css'

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Blogs application',
  description: 'Made by M.L.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          <Navbar/>
          <section className='contentWrapper'>{children}</section>
        </Provider>
      </body>
    </html>
  )
}


