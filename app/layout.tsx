import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Thuy - UX Engineer",
  description: "Bridging the gap between business goals and technical solutions. Building holistic, value-driven user experiences.",
  icons: {
    icon: '/icons/purzle.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ScrollToTop />
        <body suppressHydrationWarning>{children}</body>
    </html>
  );
}


