import './globals.css'
import { Poppins, Playfair_Display } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: "Pastor's Heart Counseling",
  description: 'Christian counseling services',
  openGraph: {
    title: "Pastor's Heart Counseling",
    description: 'Christian counseling services',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: "Pastor's Heart Counseling",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
