import Navbar from '@/components/Navbar'
import './globals.css'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'], display:'swap'})

export const metadata = {
  title: 'MyAnimeList',
  description: 'List of Anime Collections',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-darko`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
