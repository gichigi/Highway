import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Highway - Self-Driving Content for Your Blog",
  description:
    "Say goodbye to content planning, copy pasting, and manual publishing. Self-driving content that researches, writes, and publishes itself.",
  keywords:
    "self-driving content, automated content, AI blog writing, content automation, autonomous content creation, SEO content autopilot",
  openGraph: {
    title: "Highway - Self-Driving Content for Your Blog",
    description:
      "Say goodbye to content planning, copy pasting, and manual publishing. Self-driving content has arrived.",
    type: "website",
    siteName: "Highway",
    // og image is generated dynamically via app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Highway - Self-Driving Content for Your Blog",
    description:
      "Say goodbye to content planning, copy pasting, and manual publishing. Self-driving content has arrived.",
    // og image is generated dynamically via app/opengraph-image.tsx
    creator: "@highway",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
