"use client";

import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { user, isPending, signIn } = useAuth();

  if (!user) {
    return (
      <div>
        {isPending ? (
          "Loading..."
        ) : (
          <>
            <div>You are not signed in.</div>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
