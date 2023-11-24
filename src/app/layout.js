import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Strike - Carta de Productos',
  description: 'Carta de productos de Strike',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[url('https://w0.peakpx.com/wallpaper/463/807/HD-wallpaper-cafe-restaurant-bar-theme.jpg')] bg-cover bg-center bg-no-repeat min-h-screen text-white`}>{children}</body>
    </html>
  )
}
