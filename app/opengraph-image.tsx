import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

// Node.js runtime so we can read local font files (Satori requires TTF/woff, not woff2)
export const runtime = "nodejs"
export const alt = "Highway - Self-Driving Content for Your Blog"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  // Read locally-bundled Space Grotesk woff files (downloaded to public/fonts)
  const spaceGroteskBold = readFileSync(join(process.cwd(), "public/fonts/SpaceGrotesk-Bold.woff"))
  const spaceGroteskMedium = readFileSync(join(process.cwd(), "public/fonts/SpaceGrotesk-Medium.woff"))

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          // Matches the site's gradient-cream-lilac
          background: "linear-gradient(135deg, #faf8f4 0%, #ede5f5 50%, #e0d4f0 100%)",
          padding: "64px 80px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Road triangle icon */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 2L34 34H2L18 2Z" fill="#3a3650" />
            <rect x="16.5" y="14" width="3" height="12" fill="#faf8f4" rx="1.5" />
          </svg>
          <span
            style={{
              fontWeight: 700,
              fontSize: 34,
              color: "#3a3650",
              letterSpacing: "-0.02em",
            }}
          >
            Highway
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Eyebrow badge */}
          <div
            style={{
              display: "flex",
              background: "rgba(155, 114, 212, 0.12)",
              border: "1px solid rgba(155, 114, 212, 0.3)",
              borderRadius: "100px",
              padding: "8px 22px",
              alignSelf: "flex-start",
            }}
          >
            <span style={{ fontSize: 20, color: "#7c52c0", fontWeight: 500 }}>
              Self-driving content has arrived
            </span>
          </div>

          {/* Headline */}
          {/* Satori doesn't support <br/>, use separate divs for line breaks */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 700,
              fontSize: 88,
              color: "#3a3650",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              gap: 0,
            }}
          >
            <span>SEO content</span>
            <span>on autopilot.</span>
          </div>

          {/* Subline */}
          <p
            style={{
              fontSize: 28,
              color: "#6b6585",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Researches, writes, and publishes itself.
          </p>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span style={{ fontSize: 20, color: "#9b72d4", fontWeight: 500 }}>
            joinhighway.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGroteskBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Space Grotesk",
          data: spaceGroteskMedium,
          style: "normal",
          weight: 500,
        },
      ],
    }
  )
}
