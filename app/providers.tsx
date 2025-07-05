'use client'

import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  ConnectButton,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {  flowMainnet, flowTestnet} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';


export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const config = getDefaultConfig({
    appName: 'Flow App',
    projectId: 'e872ba5075a2eb7e208dcaeb0bd70e37',
    chains: [flowMainnet, flowTestnet],
    ssr: false,
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Toaster position="top-center" toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              iconTheme: {
                primary: '#68d391',
                secondary: '#333',
              },
            },
            error: {
              iconTheme: {
                primary: '#f56565',
                secondary: '#333',
              },
            },
          }} />
            {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}