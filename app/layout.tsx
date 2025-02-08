import type { Metadata } from 'next'
import './globals.css'

// import Navigation from '@/components/Navigation'
// import { Footer } from '@/components/Footer'
// import FooterBottom from '@/components/FooterBottom'

export const metadata: Metadata = {
  title: 'Dr Sarah Johnson',
  description: 'Cabinet Médical | Dr Sarah Johnson',
  icons: {
    icon: ['favicon.icon'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <Navigation/> */}
      <body>
        {children}
      </body> 
      {/* <Footer/>
      <FooterBottom/> */}
    </html>
  )
}
