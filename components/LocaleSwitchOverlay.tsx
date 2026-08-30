'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

type LocaleSwitchOverlayProps = {
  visible: boolean;
  label: string;
};

const LOADER_PIECES = 5;

export default function LocaleSwitchOverlay({ visible, label }: LocaleSwitchOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (visible) {
      setRender(true);
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
    const timer = setTimeout(() => setRender(false), 280);
    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted || !render) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ocean-50/90 backdrop-blur-md transition-opacity duration-300 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      role="status"
      aria-live="polite"
      aria-busy={visible}
      aria-label={label}
    >
      <div className="relative flex flex-col items-center">
        <div
          className="absolute -inset-8 rounded-3xl bg-ocean-500/[0.06] blur-2xl"
          aria-hidden
        />
        <div className="locale-block-loader relative" aria-hidden>
          {Array.from({ length: LOADER_PIECES }, (_, index) => (
            <span key={index} className="locale-block-loader__piece" />
          ))}
        </div>
        <p className="relative mt-5 text-sm font-semibold tracking-wide text-ocean-700">
          {label}
        </p>
      </div>
    </div>,
    document.body,
  );
}
