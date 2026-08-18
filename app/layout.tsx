import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteDescription =
  "Good Crowd Inc. brings regional communities together through high-quality events that build belonging, attract visitors and grow local economies.";

export const metadata: Metadata = {
  applicationName: "Good Crowd Inc.",
  title: {
    default: "Good Crowd Inc. | People. Place. Prosperity.",
    template: "%s | Good Crowd Inc.",
  },
  description: siteDescription,
  icons: {
    icon: [
      {
        url: "/brand/good-crowd-favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/good-crowd-favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/brand/good-crowd-favicon-light.png",
  },
  openGraph: {
    title: "Good Crowd Inc. | People. Place. Prosperity.",
    description: siteDescription,
    siteName: "Good Crowd Inc.",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Good Crowd Inc. | People. Place. Prosperity.",
    description: siteDescription,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
