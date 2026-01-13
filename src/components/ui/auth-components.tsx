import { ComponentProps } from "react";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={`w-full rounded-md border border-neutral-200 px-4 py-3 text-sm outline-none placeholder:text-neutral-500 focus:border-black ${className}`}
      {...props}
    />
  );
}

export function Button({ className, children, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={`flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
