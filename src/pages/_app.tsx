import { AuthLayout, AuthProvider } from "@/components";
import type { AppProps } from "next/app";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="bg-base-100 scroll-m-0">
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </div>
    </AuthProvider>
  );
}
