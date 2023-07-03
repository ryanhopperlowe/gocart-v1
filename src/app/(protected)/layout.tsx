import { AuthLayout, AuthProvider } from "@/components";

interface ProtectedLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ProtectedLayout) {
  return <AuthLayout>{children}</AuthLayout>;
}
