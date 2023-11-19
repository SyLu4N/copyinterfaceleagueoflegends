'use client';

import { SiRiotgames } from 'react-icons/si';

import { useRiotClient } from '@/hooks/useRiotClient';

export function IconRiotGames() {
  const { statusClient, setStatusClient } = useRiotClient();

  if (statusClient === 'CLOSED') return <></>;

  return (
    <div className="relative hover:bg-gray-50 hover:bg-opacity-[0.1] w-[35px] h-full flex items-center justify-center">
      <div className="bg-red-600 rounded-full p-1">
        <SiRiotgames className="text-white text-[8px]" />
      </div>

      <div
        onClick={() =>
          setStatusClient(statusClient === 'OPEN' ? 'MINIMIZED' : 'OPEN')
        }
        className="h-full w-[75%] absolute bottom-0 border-b-2 border-blue-300 hover:w-[100%] transition-all"
      />
    </div>
  );
}
