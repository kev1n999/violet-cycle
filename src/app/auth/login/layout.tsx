import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

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
