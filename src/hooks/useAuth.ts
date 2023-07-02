import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  signIn: () => void;
  signOut: () => void;
};

export function useAuth<T extends boolean>(config?: Config<T>) {
  const router = useRouter();

  const { data, status } = useSession({
    required: config?.required ?? false,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  const user = data?.user as User | null;
  const isPending = status === "loading";

  return { user, isPending, signIn, signOut } as AuthState<T>;
}
