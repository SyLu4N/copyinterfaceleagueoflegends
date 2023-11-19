'use client';

import { ClientLeagueOfLegends } from '@/components/clientLeagueOfLegends';
import { IconDesktop } from '@/components/iconDesktop';
import { useRiotClient } from '@/hooks/useRiotClient';

export default function Home() {
  const { statusClient, setStatusClient } = useRiotClient();

  function handleDobleClicks() {
    if (statusClient === 'OPEN') return;

    setStatusClient('OPEN');
  }

  return (
    <main className="py-2 px-4 box-border h-screen overflow-hidden">
      <div className="inline-flex flex-col gap-2">
        <IconDesktop title="Lixeira" img="/iconLixeira.png" />

        <IconDesktop
          title="League of Legends"
          img="/iconLeagueOfLegends.png"
          fn={handleDobleClicks}
        />
      </div>

      <div className="relative flex justify-center">
        <ClientLeagueOfLegends />
      </div>
    </main>
  );
}
