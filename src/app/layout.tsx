import type { Metadata } from 'next'
import {Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

const poppin = Poppins ({
  subsets:['latin'],
  variable:'--font-pop',
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className} antialiased`}>{children}</body>
    </html>
  )
}
