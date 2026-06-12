import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adaline - AI Agent Platform',
  description: 'The single platform to iterate, evaluate, deploy, and monitor AI agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  )
}
