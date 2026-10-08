import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'ARTISAN | Gourmet Bistro & Fine Dining",
  description: "Michelin selected royal Indian heritage cuisine and woodfire hearth degustation at L'Artisan Bistro.",
  authors: [{ name: "thanojsriman" }],
  creator: "thanojsriman",
  keywords: [
    "restaurant",
    "fine dining",
    "royal indian cuisine",
    "woodfire hearth",
    "degustation",
    "l artisan bistro",
    "tandoor",
    "dum biryani"
  ],
  openGraph: {
    title: "L'ARTISAN | Gourmet Bistro & Fine Dining",
    description: "Michelin selected royal Indian heritage cuisine and woodfire hearth degustation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className="bg-[#11100E] text-[#E8E3DF] antialiased selection:bg-[#D97745] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
