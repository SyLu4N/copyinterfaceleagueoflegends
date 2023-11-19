import { ReactNode } from 'react';

interface InputIconProps {
  placeholder?: string;
  icon?: ReactNode;
}

export function InputIcon({ placeholder = '', icon }: InputIconProps) {
  return (
    <div className="relative h-full">
      <input
        className="h-full w-64 border border-gray-700 pl-10 placeholder:text-black outline-none hover:border-2 hover:border-gray-400 focus:border-blue-600"
        placeholder={placeholder}
      />

      {icon && <div className="absolute top-2 left-3 text-[17px]">{icon}</div>}
    </div>
  );
}
