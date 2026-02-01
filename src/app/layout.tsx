import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Violet Cycle",
  description: "A simple app to track your menstrual cycle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppinsFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
