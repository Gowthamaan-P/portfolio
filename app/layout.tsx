import "./globals.css";

import { Commissioner } from 'next/font/google'

const commissioner = Commissioner({
  subsets: ["latin"],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={commissioner.className}>{children}</body>
    </html>
  )
}