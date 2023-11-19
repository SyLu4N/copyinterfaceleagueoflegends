'use client';

import { FaArrowRight } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { MdOutlineMinimize } from 'react-icons/md';

import { Checkbox } from '@/components/checkbox';
import { Input } from '@/components/input';
import { useRiotClient } from '@/hooks/useRiotClient';

export function ClientLeagueOfLegends() {
  const { setStatusClient, statusClient } = useRiotClient();

  return (
    <aside
      className={`
      flex
      absolute
      max-w-[1300px]
      bg-white
      m-auto
      transition-all
      duration-300
      opacity-[0%]
      mb-[0%]
      ml-[-20%]
      mt-[0%]
      ${statusClient === 'OPEN' && 'opacity-[100%] ml-[0%] mt-[0%]'}
      ${statusClient === 'MINIMIZED' && 'ml-[0%] mt-[40%]'}
      `}
    >
      <div className="p-10 min-w-[30%] flex flex-col gap-10">
        <img
          src="logo.png"
          alt="Logotipo minificado do league of legends"
          className="w-16 mt-2 mb-5 ml-[-12px]"
        />

        <h2 className="font-bold text-2xl">Sign in with your Riot Account</h2>

        <div className="flex flex-col gap-2">
          <Input label="USERNAME" />
          <Input type="password" label="PASSWORD" />

          <Checkbox label="Stay signed in" />
        </div>

        <div className="flex justify-center mt-4">
          <button className="p-5 rounded-2xl bg-red-600 text-white text-[30px] hover:bg-red-700 transition">
            <FaArrowRight />
          </button>
        </div>

        <aside className="text-[12px] mt-auto text-gray-600 font-bold">
          <p className="hover:text-red-600 cursor-pointer inline-block transition duration-300">
            <a
              href="https://signup.leagueoflegends.com/pt-br/signup/index#/"
              target="_blank"
              rel="noreferrer"
            >
              CREATE ACCOUNT
            </a>
          </p>

          <br />

          <p className="hover:text-red-600 cursor-pointer inline-block transition duration-300">
            CAN&apos;T SIGN IN?
          </p>
        </aside>
      </div>

      <div className="relative">
        <div className="absolute flex right-2 top-2 text-[20px] gap-1">
          <MdOutlineMinimize
            onClick={() => setStatusClient('MINIMIZED')}
            className="pb-[7px] cursor-pointer hover:bg-slate-50 hover:bg-opacity-5 text-white"
          />

          <GrFormClose
            onClick={() => setStatusClient('CLOSED')}
            className="cursor-pointer hover:bg-slate-50 hover:bg-opacity-5 text-white"
          />
        </div>

        <img
          className="h-full w-full"
          alt="Arte criada do league of legends"
          src="https://s2-techtudo.glbimg.com/tP2p4gidVIml_0b3vruDMMbYBbY=/0x0:695x431/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/M/o/ZAf7yxShGhGLmZXnZMdQ/splash.jpg"
        />
      </div>
    </aside>
  );
}
