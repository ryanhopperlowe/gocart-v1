"use client";

import { useAuth } from "@/hooks";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { user, isPending, signOut, signIn } = useAuth();

  if (!user && !isPending) {
    signIn();
  }

  if (isPending) {
    return <>Loading...</>;
  }

  return (
    <>
      {children}
      <button className="bg-blue-500" onClick={signOut}>
        Sign Out
      </button>
    </>
  );
}
