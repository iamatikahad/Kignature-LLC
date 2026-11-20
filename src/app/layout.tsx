import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Kignature LLC — Technology Company in Dhaka, Bangladesh",
    template: "%s | Kignature LLC",
  },
  description:
    "Kignature LLC is a technology company in Dhaka, Bangladesh. We are building NexBD, a super app that brings messaging, social, shopping, payments, and everyday services into one place.",
  keywords: [
    "Kignature LLC",
    "NexBD",
    "Super App",
    "Bangladesh technology",
    "digital ecosystem",
    "software company",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kignature LLC",
    title: "Kignature LLC — Technology Company in Dhaka, Bangladesh",
    description:
      "The company behind NexBD — one app for messaging, social, shopping, payments, and everyday services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kignature LLC — Technology Company in Dhaka, Bangladesh",
    description:
      "The company behind NexBD — one app for messaging, social, shopping, payments, and everyday services.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kignature LLC",
  description:
    "Technology company in Dhaka, Bangladesh, building NexBD.",
  slogan: "One app for everyday life.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-slate-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
