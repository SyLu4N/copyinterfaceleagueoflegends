import { FaArrowRight } from 'react-icons/fa';

import { Metadata } from 'next';

import '../styles/globals.css';
import { Input } from '@/components/input';

export const metadata: Metadata = {
  title: 'Login - League of Legends',
};

export default function Home() {
  return (
    <main className="flex w-full max-w-4xl bg-neutral-100">
      <div className="p-6 w-[30%] flex flex-col gap-4">
        <h2>LOGO</h2>

        <h3 className="font-bold">Sign in with your Riot Account</h3>

        <Input type="text" label="USERNAME" />
        <input type="text" className="block" />

        <label className="flex gap-2">
          <input type="checkbox" className="block" />
          <p className="text-xs">Manter me conectado</p>
        </label>

        <div className="flex justify-center mt-4">
          <button className="p-3 rounded-lg bg-red-600 text-white ">
            <FaArrowRight />
          </button>
        </div>

        <div className="text-[10px] mt-auto">
          <p>CREATE ACCOUNT</p>
          <p>CAN&apos;T SIGN IN </p>
        </div>
      </div>

      <img
        className="h-full w-[70%]"
        alt="Arte criada do league of legends"
        src="https://s2-techtudo.glbimg.com/tP2p4gidVIml_0b3vruDMMbYBbY=/0x0:695x431/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/M/o/ZAf7yxShGhGLmZXnZMdQ/splash.jpg"
      />
    </main>
  );
}
