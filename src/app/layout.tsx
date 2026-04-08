import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NetlifyIdentity } from "@/components/NetlifyIdentity";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Dr Branko M. Vujkovic | Fizijatar - Specijalist fizikalne medicine",
  description:
    "MSc. dr Branko M. Vujkovic - Specijalist fizikalne medicine i rehabilitacije. Dijagnostika i terapija bolnih stanja, regenerativna medicina, sportske povrede, sokvejv terapija. Sabac, Srbija.",
  keywords: [
    "fizijatar",
    "fizikalna medicina",
    "rehabilitacija",
    "Sabac",
    "sportske povrede",
    "sokvejv terapija",
    "regenerativna medicina",
    "dr Vujkovic",
  ],
  openGraph: {
    title: "Dr Branko M. Vujkovic | Fizijatar",
    description:
      "Specijalist fizikalne medicine i rehabilitacije - Sabac, Srbija",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NetlifyIdentity />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
