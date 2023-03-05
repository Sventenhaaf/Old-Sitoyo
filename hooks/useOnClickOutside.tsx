import { useEffect, RefObject } from "react";

type Handler = (event: MouseEvent) => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler): void {
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    });
  }, []);
}
