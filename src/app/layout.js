import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import "./globals.css";
import { Oxygen, Roboto, Montserrat } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";

// 1️⃣ Configure the fonts with performance optimizations
export const oxygen = Oxygen({
  subsets: ["latin"],
  variable: "--font-oxygen",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
  display: "swap",
  preload: false, // Only preload primary font
  fallback: ["system-ui", "arial"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false, // Only preload primary font
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  metadataBase: new URL("https://anshithacleaning.com"),
  title:
    "Anshitha Cleaning Services - Best Cleaning Services in Hyderabad, India",
  description:
    "Professional cleaning services in Hyderabad. Home & office cleaning starting from ₹699. 100% customer satisfaction, fast & reliable service. Book now!",
  keywords:
    "cleaning services, Hyderabad, home cleaning, office cleaning, professional cleaners, house cleaning, maid service, deep cleaning",
  authors: [{ name: "Anshitha Cleaning Services" }],
  creator: "Anshitha Cleaning Services",
  publisher: "Anshitha Cleaning Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anshithacleaning.com",
    title: "Anshitha Cleaning Services - Best Cleaning Services in Hyderabad",
    description:
      "Professional cleaning services in Hyderabad. Home & office cleaning starting from ₹699. 100% customer satisfaction, fast & reliable service.",
    siteName: "Anshitha Cleaning Services",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anshitha Cleaning Services - Professional Cleaning in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshitha Cleaning Services - Best Cleaning Services in Hyderabad",
    description:
      "Professional cleaning services in Hyderabad. Home & office cleaning starting from ₹699.",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://anshithacleaning.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* Critical resource preloading */}
        <link
          rel="preload"
          href="/videos/hero-video.mp4"
          as="video"
          type="video/mp4"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Critical CSS inlined for faster FCP */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .hero { background: radial-gradient(circle, rgba(58, 111, 67, 1) 0%, rgba(6, 66, 50, 1) 100%); }
            .oxygen { font-family: var(--font-oxygen), system-ui, arial, sans-serif; }
            body { font-family: var(--font-montserrat), system-ui, arial, sans-serif; }
            * { scrollbar-width: none; -ms-overflow-style: none; }
            *::-webkit-scrollbar { display: none; }
            .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
            .animate-spin { animation: spin 1s linear infinite; }
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          `,
          }}
        />
      </head>
      <body
        className={`${oxygen.variable} ${roboto.variable} ${montserrat.variable} antialiased`}
      >
        <PerformanceMonitor />
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
