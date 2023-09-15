import { useCallback, useRef } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) => {
  const timer = useRef<number | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [delay, callback]
  );

  return debouncedCallback;
};

export default useDebounce;
