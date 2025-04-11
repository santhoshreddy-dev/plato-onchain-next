"use client";

import { base, baseSepolia } from "wagmi/chains";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import type { ReactNode } from "react";

export function Providers(props: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={baseSepolia}
      config={{
        appearance: {
          name: "Plato Onchain",
          logo: "/logo.png",
          mode: "auto",
          theme: "default",
        },
        wallet: {
          display: "modal",
          termsUrl: "https://...",
          privacyUrl: "https://...",
        },
      }}
    >
      {props.children}
    </OnchainKitProvider>
  );
}
