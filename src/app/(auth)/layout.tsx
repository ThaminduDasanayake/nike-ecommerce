import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <section className="bg-dark-900 text-light-100 hidden flex-col justify-between p-10 lg:flex">
        <div className="flex items-center">
          <div className="bg-orange inline-flex h-8 w-8 items-center justify-center rounded-md">
            <Image src="/logo.svg" alt="Nike" width={20} height={20} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-heading-2">Just Do It</h2>
          <p className="text-lead text-light-300 max-w-md">
            Join millions of athletes and fitness enthusiasts who trust Nike for their performance
            needs.
          </p>
          <div className="flex gap-2" aria-hidden="true">
            <span className="bg-light-100/90 h-2 w-2 rounded-full" />
            <span className="bg-light-100/50 h-2 w-2 rounded-full" />
            <span className="bg-light-100/50 h-2 w-2 rounded-full" />
          </div>
        </div>

        <p className="text-footnote text-light-400">© 2025 Nike. All rights reserved.</p>
      </section>
      <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">{children}</div>
      </section>{' '}
    </main>
  );
}
