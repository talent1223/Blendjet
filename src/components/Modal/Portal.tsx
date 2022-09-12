import { VNode } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import './style.scss';

interface PortalProps {
  children: VNode;
}

export function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // Put inside a useEffect so that portal contents only mount on client-side
  useEffect(() => {
    ref.current = document.getElementById('portal') as HTMLElement;
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
