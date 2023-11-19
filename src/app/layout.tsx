import { ReactNode } from 'react';
import { FaWindows } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';

import '../styles/globals.css';

import { IconRiotGames } from '@/components/iconRiotGames';
import { InputIcon } from '@/components/inputIcon';
import { RiotClientProvider } from '@/context/riotClient';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <RiotClientProvider>
        <body
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('fundo.png')" }}
        >
          {children}

          <footer className="w-screen h-8 bg-gray-800 absolute bottom-0 flex items-center gap-2">
            <FaWindows className="text-white text-xl ml-2" />

            <InputIcon placeholder="Pesquisar" icon={<VscSearch />} />
            <IconRiotGames />
          </footer>
        </body>
      </RiotClientProvider>
    </html>
  );
}
