import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

type Config<T extends boolean> = {
  required?: T;
};

type User = {
  name: string;
  email: string;
  image?: string;
};

type AuthState<T extends boolean> = {
  user: T extends true ? User : User | null;
  isPending: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

export function useAuth<T extends boolean>(config?: Config<T>) {
  const pathname = usePathname();

  const { data, status } = useSession({
    required: config?.required ?? false,
  });

  const user = data?.user as User | null;
  const isPending = status === "loading";

  const handleSignIn = useCallback(() => {
    signIn(undefined, {
      callbackUrl: pathname,
    });
  }, [pathname]);

  return {
    user,
    isPending,
    signIn: handleSignIn,
    signOut,
  } as AuthState<T>;
}
