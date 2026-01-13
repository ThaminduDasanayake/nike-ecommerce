import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    title: 'Featured',
    links: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
  },
  {
    title: 'Shoes',
    links: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
  },
  {
    title: 'Clothing',
    links: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
  },
  {
    title: "Kids'",
    links: [
      'Infant & Toddler Shoes',
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes",
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="flex items-start md:col-span-3">
            <Image src="/logo.svg" alt="Nike" width={48} height={48} />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-7">
            {columns.map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-heading-3 mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-body text-light-400 hover:text-light-300">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 md:col-span-2 md:justify-end">
            {[
              { src: '/x.svg', alt: 'X' },
              { src: '/facebook.svg', alt: 'Facebook' },
              { src: '/instagram.svg', alt: 'Instagram' },
            ].map(({ src, alt }) => (
              <Link
                key={alt}
                href="#"
                aria-label={alt}
                className="bg-light-100 inline-flex h-10 w-10 items-center justify-center rounded-full"
              >
                <Image src={src} alt={alt} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="text-light-400 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-caption flex items-center gap-3">
            <Image src="/globe.svg" alt="" width={16} height={16} />
            <span>Sri Lanka</span>
            <span className="text-dark-500">© 2026 Nike, Inc. All Rights Reserved</span>
          </div>

          <ul className="text-caption flex items-center gap-6">
            {['Guides', 'Terms of Sale', 'Terms of Use', 'Nike Privacy Policy'].map((t) => (
              <li key={t}>
                <Link href="#">{t}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
