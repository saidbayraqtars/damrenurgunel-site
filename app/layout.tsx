
import type { Metadata } from "next";
import { Geist, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Klinik Psikolog Damrenur Günel | Profesyonel Psikolojik Destek",
  description: "Klinik Psikolog Damrenur Günel ile bireysel terapi, çift terapisi, çocuk psikolojisi ve online terapi hizmetleri. İstanbul Kadıköy'de uzman psikolojik destek.",
  keywords: "klinik psikolog, psikoterapi, bireysel terapi, çift terapisi, çocuk psikolojisi, online terapi, kaygı tedavisi, depresyon, İstanbul psikolog",
  authors: [{ name: "Klinik Psikolog Damrenur Günel" }],
  openGraph: {
    title: "Klinik Psikolog Damrenur Günel | Profesyonel Psikolojik Destek",
    description: "Uzman psikolojik destek ve terapi hizmetleri. Bireysel, çift ve aile terapisi. İstanbul Kadıköy.",
    type: "website",
    locale: "tr_TR",
    siteName: "Klinik Psikolog Damrenur Günel"
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Psikolog Damrenur Günel | Profesyonel Psikolojik Destek",
    description: "Uzman psikolojik destek ve terapi hizmetleri. Bireysel, çift ve aile terapisi."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#b91c1c'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
