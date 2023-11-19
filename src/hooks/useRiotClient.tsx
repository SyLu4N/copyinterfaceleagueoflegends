import { useContext } from 'react';

import { RiotClientContext } from '@/context/riotClient';

export function useRiotClient() {
  const { statusClient, setStatusClient } = useContext(RiotClientContext);

  return { statusClient, setStatusClient };
}
