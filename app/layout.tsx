import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'macOS Post-Install Script Generator | Setup your Mac automatically',
  description:
    'Generate a custom macOS post-installation script. Set up your Mac in few seconds automatically.',
  openGraph: {
    title: 'macOS Post-Install Script Generator | Setup your Mac automatically',
    description:
      'Generate a custom macOS post-installation script. Set up your Mac in few seconds automatically.',
    url: 'https://macos-post-install.dev',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://macos-post-install.dev/'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <Script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='735a662e-d848-47de-b3b1-0d288f2b7737'
          strategy='beforeInteractive'
        />
      </Head>
      <body className={`${geistSans.variable} pt-(--header-height)`}>
        {children}
      </body>
    </html>
  )
}
