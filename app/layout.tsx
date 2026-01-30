import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rahi Homes - Premium Girls Hostel in Vile Parle, Mumbai',
  description: 'Premium girls hostel in the heart of Vile Parle, Mumbai. Safe, stylish, and thoughtfully designed living spaces opposite DJ Sanghvi College. Offering 2, 3, and 4-sharing rooms with modern amenities.',
  keywords: 'girls hostel, Vile Parle, Mumbai, DJ Sanghvi, premium accommodation, safe living, student housing',
  authors: [{ name: 'Rahi Homes' }],
  openGraph: {
    title: 'Rahi Homes - Premium Girls Hostel in Vile Parle',
    description: 'Where Comfort Meets Community. Premium girls hostel opposite DJ Sanghvi College.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#F5F1EA',
              color: '#1f2937',
              fontFamily: 'var(--font-poppins)',
            },
            success: {
              iconTheme: {
                primary: '#B23A3A',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
