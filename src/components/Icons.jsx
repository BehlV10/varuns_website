import React from 'react';

export function GithubIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function StripeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <path d="M13.9 16.2c0-1.4 1.2-2 3.1-2 2.8 0 6.3 1.1 9.1 2.6v-7c-3-1.2-6.1-1.8-9.2-1.8-7.5 0-12.5 3.9-12.5 10.4 0 10.2 14 8.5 14 12.9 0 1.7-1.5 2.2-3.6 2.2-3.2 0-7.3-1.4-10.5-3.3v7.3c3.5 1.5 7.1 2.2 10.6 2.2 7.7 0 13.2-3.8 13.2-10.4-.1-10.6-14.2-9-14.2-13.1z" />
    </svg>
  );
}
