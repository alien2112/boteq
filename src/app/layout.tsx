import type { Metadata, Viewport } from "next";
import { Cairo, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://5yata.com"), // Update with actual domain

  title: {
    default: "خياطة رواء | للأزياء النسائية الراقية",
    template: "%s | خياطة رواء للأزياء النسائية",
  },

  description:
    "مشغل خياطة رواء المتخصص في تصميم وتفصيل أرقى الأزياء النسائية، فساتين السهرة، الجلابيات، وملابس الإحرام. دقة في التفصيل وجودة في الأقمشة لتناسب ذوقك الرفيع.",

  keywords: [
    /* ========= BRAND ========= */
    "خياطة رواء",
    "مشغل رواء",
    "Rawaa Sewing",
    "Rawaa Fashion",

    /* ========= SERVICES ========= */
    "خياطة نسائية",
    "تفصيل فساتين",
    "خياطة جلابيات",
    "تصميم أزياء",
    "موديلات فساتين",
    "ملابس إحرام نسائية",
    "تفصيل عبايات",
    "تعديل ملابس",
    "خياطة راقية",
    "مشغل خياطة",
    "تفصيل حسب الطلب",

    /* ========= LOCATIONS (General) ========= */
    "خياطة في السعودية",
    "مشغل خياطة بجدة",
    "أفضل مشغل خياطة",

    /* ========= ENGLISH ========= */
    "Women's Tailoring",
    "Fashion Design",
    "Dress Making",
    "Abaya Tailoring",
    "Sewing Services Saudi Arabia",
    "High-end Fashion",
  ],

  alternates: {
    canonical: "./",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "خياطة رواء | للأزياء النسائية الراقية",
    description: "خدمات خياطة وتفصيل أزياء نسائية، جلابيات، وملابس إحرام بأعلى جودة ودقة.",
    url: "https://5yata.com/",
    siteName: "خياطة رواء",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "خياطة رواء",
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "خياطة رواء | للأزياء النسائية الراقية",
    description: "خدمات خياطة وتفصيل أزياء نسائية، جلابيات، وملابس إحرام بأعلى جودة.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFBF2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager (Placeholder ID - Update with actual ID) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJ8X123'); 
          `,
          }}
        />
        {/* Note: I used a placeholder GTM ID (GTM-MJ8X123). Please replace with your actual container ID. */}

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "additionalType": "fashion",
              name: "خياطة رواء",
              image: "https://5yata.com/logo.webp",
              "@id": "https://5yata.com",
              url: "https://5yata.com",
              telephone: "+966500000000", // Update with actual number
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressRegion: "Saudi Arabia",
              },
              areaServed: ["Saudi Arabia"],
            }),
          }}
        />
      </head>
      <body
        className={`${cairo.variable} ${greatVibes.variable} antialiased font-sans`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJ8X123"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C5A038] focus:text-white focus:rounded"
        >
          تخطّي إلى المحتوى
        </a>

        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
