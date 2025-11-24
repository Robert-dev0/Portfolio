import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'
import { ThemeProvider } from '@/components/theme-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Sr. Software Engineer & UI Developer - Crafting beautiful digital experiences',
  generator: '',
  icons: {
    icon: [
      {
        url: '/Ricon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Ricon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Ricon.png',
        type: 'image/png',
      },
    ],
    apple: '/Ricon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollRevealProvider />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
