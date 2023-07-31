"use client";

import { useAuth } from "@/hooks";
import { AppNav, Spinner } from "@/components";
import { Browser } from "@capacitor/browser";
import { routes } from "@/routes";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { user, isPending, signIn } = useAuth();

  console.log(user);

  if (isPending) {
    return <Spinner centered />;
  }

  return user ? (
    <>
      <AppNav />
      <main className="container mx-auto h-full">{children}</main>
    </>
  ) : (
    <button
      className="pt-20 pl-6"
      onClick={() =>
        Browser.open({
          url: routes.host() + routes.login(),
        })
      }
    >
      login
    </button>
    // signIn();
  );
}
