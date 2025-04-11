import "@coinbase/onchainkit/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Plato Onchain App template",
  description: "Plato AI's Onchainkit app template to build web3 apps",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background dark">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
