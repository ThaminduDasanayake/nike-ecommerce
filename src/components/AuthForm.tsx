'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SocialProviders } from '@/components';

type Props = {
  mode: 'sign-in' | 'sign-up';
  onSubmitAction: (formData: FormData) => Promise<{ ok: boolean; userId?: string } | void>;
};

export default function AuthForm({ mode, onSubmitAction }: Props) {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const result = await onSubmitAction(formData);

      if (result?.ok) router.push('/');
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-caption text-dark-700">
          {mode === 'sign-in' ? 'Don’t have an account? ' : 'Already have an account? '}
          <Link href={mode === 'sign-in' ? '/sign-up' : '/sign-in'} className="underline">
            {mode === 'sign-in' ? 'Sign Up' : 'Sign In'}
          </Link>
        </p>

        <h1 className="text-heading-3 text-dark-900 mt-3">
          {mode === 'sign-in' ? 'Welcome Back!' : 'Join Nike Today!'}
        </h1>
        <p className="text-body text-dark-700 mt-1">
          {mode === 'sign-in'
            ? 'Sign in to continue your journey'
            : 'Create your account to start your fitness journey'}
        </p>
      </div>

      <SocialProviders variant={mode} />

      <div className="flex items-center gap-4">
        <hr className="bg-light-300 h-px w-full border-0" />
        <span className="text-caption text-dark-700 shrink-0">
          Or {mode === 'sign-in' ? 'sign in' : 'sign up'} with
        </span>
        <hr className="bg-light-300 h-px w-full border-0" />
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {mode === 'sign-up' && (
          <div className="space-y-1">
            <label htmlFor="name" className="text-caption text-dark-900">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="border-light-300 bg-light-100 text-body text-dark-900 placeholder:text-dark-500 focus:ring-dark-900/10 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:outline-none"
              autoComplete="name"
            />
          </div>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-caption text-dark-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            className="border-light-300 bg-light-100 text-body text-dark-900 placeholder:text-dark-500 focus:ring-dark-900/10 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:outline-none"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-caption text-dark-900">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="minimum 8 characters"
              className="border-light-300 bg-light-100 text-body text-dark-900 placeholder:text-dark-500 focus:ring-dark-900/10 w-full rounded-xl border px-4 py-3 pr-12 focus:ring-2 focus:outline-none"
              autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
              minLength={8}
              required
            />
            <button
              type="button"
              className="text-caption text-dark-700 absolute inset-y-0 right-0 px-3"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? 'Hide password' : 'Show password'}
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-dark-900 text-body-medium text-light-100 hover:bg-dark-700 focus:ring-dark-900/20 mt-2 w-full rounded-full px-6 py-3 focus:ring-2 focus:outline-none"
        >
          {mode === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </button>

        {mode === 'sign-up' && (
          <p className="text-footnote text-dark-700 text-center">
            By signing up, you agree to our{' '}
            <a href="#" className="underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        )}
      </form>
    </div>
  );
}
