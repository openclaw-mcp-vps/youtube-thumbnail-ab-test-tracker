import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailTest – A/B Test Your YouTube Thumbnails",
  description:
    "Track which thumbnails perform best. Upload variants and monitor CTR, view duration, and engagement to find winners."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="c5397950-4b4d-493a-bc2e-6ec6af2ecea7"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
