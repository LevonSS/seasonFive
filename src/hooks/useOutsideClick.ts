import { useEffect, useRef } from "react";

type OutsideClickProps = {
  handleToggleContact: () => void;
  listenCapturing?: boolean;
};

export function useOutsideClick({
  handleToggleContact,
  listenCapturing = true,
}: OutsideClickProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleToggleContact();
      }
    };
    document.addEventListener("click", handleClickOutSide, listenCapturing);
    return () => {
      document.removeEventListener(
        "click",
        handleClickOutSide,
        listenCapturing
      );
    };
  }, [handleToggleContact, listenCapturing]);

  return ref;
}
