import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

/* ✨ Elegant script font for decorative subtitles and accent text */
const script = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rahi Homes - Premium Girls Hostel in Vile Parle, Mumbai',
  description:
    'Premium girls hostel in the heart of Vile Parle, Mumbai. Safe, stylish, and thoughtfully designed living spaces opposite DJ Sanghvi College. Offering 2, 3, and 4-sharing rooms with modern amenities.',
  keywords:
    'girls hostel, Vile Parle, Mumbai, DJ Sanghvi, premium accommodation, safe living, student housing',
  authors: [{ name: 'Rahi Homes' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Rahi Homes - Premium Girls Hostel in Vile Parle',
    description: 'Where Comfort Meets Community. Premium girls hostel opposite DJ Sanghvi College.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${script.variable}`}>
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#FFFFFF',
              color: '#1f2937',
              fontFamily: 'var(--font-jakarta)',
            },
            success: {
              iconTheme: {
                primary: '#FF6FAE',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
