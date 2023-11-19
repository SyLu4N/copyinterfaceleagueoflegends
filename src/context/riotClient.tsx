'use client';
import { createContext, ReactNode, useState } from 'react';

interface RiotClientProvider {
  children: ReactNode;
}

export type StatusClient = 'OPEN' | 'CLOSED' | 'MINIMIZED';

type RiotClientData = {
  statusClient: StatusClient;
  setStatusClient: (value: StatusClient) => void;
};

export const RiotClientContext = createContext({} as RiotClientData);

export function RiotClientProvider({ children }: RiotClientProvider) {
  const [statusClient, setStatusClient] = useState<StatusClient>('OPEN');

  return (
    <RiotClientContext.Provider
      value={{
        statusClient,
        setStatusClient,
      }}
    >
      {children}
    </RiotClientContext.Provider>
  );
}
