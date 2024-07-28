import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'Comment Extensible',
  description: 'A React.js package for handling comments, supporting one level of replies and being database agnostic.',
}

const inter = Inter({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={inter.className} >{children}</body>
    </html>
  )
}
