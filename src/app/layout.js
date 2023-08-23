import Navbar from '@/app/Components/Navbar'
import './globals.css'
import { Hind_Siliguri, Inter } from 'next/font/google'
import Footer from '@/app/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog website',
  description: 'Find latest blog',
}
const Siliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['300','400','500','600','700'],
  variable:'--font-siliguri'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Siliguri.variable}>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
