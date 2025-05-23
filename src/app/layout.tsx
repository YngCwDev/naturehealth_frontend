import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nature Health",
  description: "Natureza como fonte de saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased  text-darkgreen1`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        <main className="min-h-[95vh]"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
