import TopBar from "@/components/cart/top-bar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../styles/globals.css";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nature Health",
  description: "Natureza como fonte de saúde",
};

export default function CartLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ productId: string }>;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased  text-darkgreen1`}
        cz-shortcut-listen="true"
      >
        <TopBar/>
        <main className="min-h-[95vh]"> {children}</main>

      </body>
    </html>
  );
}
