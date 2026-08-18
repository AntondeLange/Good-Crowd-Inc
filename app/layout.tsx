import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: { default: "Good Crowd Inc.", template: "%s | Good Crowd Inc." },
  description: "Good Crowd Inc. brings regional communities together through high-quality events that build belonging, attract visitors and grow local economies."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
