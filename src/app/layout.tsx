import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
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
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
