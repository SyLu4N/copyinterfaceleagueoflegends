/* eslint-disable prettier/prettier */
'use client';

import { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
}

export function Input({ label, type = 'text', ...rest }: InputProps) {
  const [isActive, setIsActive] = useState(false);

  const [value, setValue] = useState('');

  return (
    <div
      className={`relative flex items-center w-full  `}
    >
      {label && (
        <label
          className={`absolute  text-gray-600 font-bold left-1 transition-all ${isActive ? 'top-0 text-[8px]' : 'text-[12px] top-2'
            } transition-all duration-300`}
        >
          {label}
        </label>
      )}

      <input
        {...rest}
        type={type}
        className="w-full pl-1 text-[16px] h-[40px] pt-1 font-bold bg-neutral-100"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(!value ? false : true)}
      />
    </div>
  );
}
