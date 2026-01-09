import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UptimeKit | The Open Source Status Page Solution",
  description: "Free, self-hosted, and unrestricted monitoring for all your services. Visualize your infrastructure with beautiful status pages.",
  openGraph: {
    title: "UptimeKit | The Open Source Status Page Solution",
    description: "Free, self-hosted, and unrestricted monitoring for all your services. Visualize your infrastructure with beautiful status pages.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "UptimeKit Preview" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UptimeKit | The Open Source Status Page Solution",
    description: "Free, self-hosted, and unrestricted monitoring for all your services. Visualize your infrastructure with beautiful status pages.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/uptimekit.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
