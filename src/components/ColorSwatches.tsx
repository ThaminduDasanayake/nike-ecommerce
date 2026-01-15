'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { useVariantStore } from '@/store/variant';

type Variant = { color: string; images: string[] };

export interface ColorSwatchesProps {
  productId: string;
  variants: Variant[];
  className?: string;
}

function firstValidImage(images: string[]) {
  return images.find((s) => typeof s === 'string' && s.trim().length > 0);
}

export default function ColorSwatches({ productId, variants, className = '' }: ColorSwatchesProps) {
  const setSelected = useVariantStore((s) => s.setSelected);
  const selected = useVariantStore((s) => s.getSelected(productId, 0));

  return (
    <div className={`flex flex-wrap gap-3 ${className}`} role="listbox" aria-label="Choose color">
      {variants.map((v, i) => {
        const src = firstValidImage(v.images);
        if (!src) return null;
        const isActive = selected === i;
        return (
          <button
            key={`${v.color}-${i}`}
            onClick={() => setSelected(productId, i)}
            aria-label={`Color ${v.color}`}
            aria-selected={isActive}
            role="option"
            className={`ring-light-300 relative h-[72px] w-[120px] cursor-pointer overflow-hidden rounded-lg ring-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500] ${
              isActive ? 'ring-[--color-dark-500]' : 'hover:ring-dark-500'
            }`}
          >
            <Image src={src} alt={v.color} fill sizes="120px" className="object-cover" />
            {isActive && (
              <span className="bg-light-100 absolute top-1 right-1 rounded-full p-1">
                <Check className="text-dark-900 h-4 w-4" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
