import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-blue-100 flex justify-center items-center h-screen">
        {children}
      </body>
    </html>
  );
}
