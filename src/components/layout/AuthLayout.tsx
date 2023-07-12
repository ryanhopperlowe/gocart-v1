"use client";

import { useAuth } from "@/hooks";
import { AppNav, Spinner } from "@/components";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { user, isPending, signIn } = useAuth();

  if (!user && !isPending) {
    signIn();
  }

  if (isPending) {
    return <Spinner centered />;
  }

  return (
    <>
      <AppNav />
      <main className="container mx-auto h-full">{children}</main>
    </>
  );
}
