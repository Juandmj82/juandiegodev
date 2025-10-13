import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Juan Diego Merchán - Software Developer',
  description: 'Portafolio de Juan Diego Merchán, desarrollador de software especializado en backend con Java y Spring Boot.',
  openGraph: {
    title: 'Juan Diego Merchán - Software Developer',
    description: 'Portafolio de Juan Diego Merchán, desarrollador de software especializado en backend con Java y Spring Boot.',
    url: 'https://juandiegodev.vercel.app',
    siteName: 'Juan Diego Merchán Portfolio',
    images: [
      {
        url: '/profile-hero.webp',
        width: 400,
        height: 400,
        alt: 'Juan Diego Merchán - Software Developer',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Diego Merchán - Software Developer',
    description: 'Portafolio de Juan Diego Merchán, desarrollador de software especializado en backend con Java y Spring Boot.',
    images: ['/profile-hero.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-primary bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background to-background`} style={{ backgroundColor: '#100E0D' }}>
        {children}
      </body>
    </html>
  )
}
