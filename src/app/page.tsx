"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/lists");
  }, []);

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
