import Image from 'next/image';

type Props = { variant?: 'sign-in' | 'sign-up' };

export default function SocialProviders({ variant = 'sign-in' }: Props) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="border-light-300 bg-light-100 text-body-medium text-dark-900 hover:bg-light-200 focus:ring-dark-900/10 flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 focus:ring-2 focus:outline-none"
        aria-label={`${variant === 'sign-in' ? 'Continue' : 'Sign up'} with Google`}
      >
        <Image src="/google.svg" alt="" width={18} height={18} />
        <span>Continue with Google</span>
      </button>
      <button
        type="button"
        className="border-light-300 bg-light-100 text-body-medium text-dark-900 hover:bg-light-200 focus:ring-dark-900/10 flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 focus:ring-2 focus:outline-none"
        aria-label={`${variant === 'sign-in' ? 'Continue' : 'Sign up'} with Apple`}
      >
        <Image src="/apple.svg" alt="" width={18} height={18} />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
