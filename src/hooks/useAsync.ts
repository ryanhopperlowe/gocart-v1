import { use, useCallback, useMemo, useState } from "react";

interface Config {
  hold?: boolean;
}

export function useAsync<T, K extends any[]>(
  callback: (...args: K) => Promise<T>,
  config?: Config
) {
  const { hold = false } = config || {};

  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const execute = useCallback(
    async (...args: K) => {
      setPending(true);
      setError(null);
      if (!hold) setData(null);

      const promise = callback(...args);

      promise
        .then(setData)
        .catch(setError)
        .finally(() => setPending(false));

      return promise;
    },
    [callback, hold]
  );

  return useMemo(
    () => ({ data, pending, error, execute }),
    [data, pending, error, execute]
  );
}
