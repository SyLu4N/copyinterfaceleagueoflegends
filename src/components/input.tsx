import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <div className="relative">
      {label && <p className="absolute text-[10px] top-0">{label}</p>}
      <input {...rest} />
    </div>
  );
}
