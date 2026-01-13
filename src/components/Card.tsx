'use client';

import Image from 'next/image';
import Link from 'next/link';

export type BadgeTone = 'red' | 'green' | 'orange';

export interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  meta?: string | string[];
  price?: string | number;
  imageSrc: string;
  href?: string;
  className?: string;
}

export default function Card({
  title,
  subtitle,
  description,
  meta,
  price,
  imageSrc,
  href,
  className = '',
}: CardProps) {
  const displayPrice =
    price === undefined ? undefined : typeof price === 'number' ? `$${price.toFixed(2)}` : price;

  return (
    <Link href={href ? href : '/'} aria-label={title} className="block">
      <article
        className={`group bg-light-100 ring-light-300 transform-colors hover:ring-dark-500 rounded-xl ring-1 ${className}`}
      >
        {/* Image Container */}
        <div className="bg-light-200 relative aspect-square overflow-hidden rounded-t-xl">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <h3 className="text-heading-3 text-dark-900">{title}</h3>
            {displayPrice && <span className="text-body-medium text-dark-900">{displayPrice}</span>}
          </div>
          {description && <p className="text-body text-dark-700">{description}</p>}
          {subtitle && <p className="text-body text-dark-700">{subtitle}</p>}
          {meta && (
            <p className="text-caption text-dark-700 mt-1">
              {Array.isArray(meta) ? meta.join(' • ') : meta}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
