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
    <body className={`${inter.className} bg-cover bg-center bg-no-repeat min-h-screen text-white font-yanone-kaffeesatz`} style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://w0.peakpx.com/wallpaper/463/807/HD-wallpaper-cafe-restaurant-bar-theme.jpg')" }}>
      {children}
    </body>
  </html>
  )
}
