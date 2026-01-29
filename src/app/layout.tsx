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
  description: "A simple app to tracker the your menstrual cycle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
