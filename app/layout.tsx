import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Provider from './components/Provider/Provider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { Navbar } from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

const robot = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Random blogs app',
  description: 'Made by M.L.',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <section>{children}</section>
          </Provider>
      </body>
    </html>
  )
}


