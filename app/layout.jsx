'use client';

import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { AccessibilityProvider } from './context/AccessibilityContext';
import useScreenReaderAutoFocus from '../app/hooks/useScreenReader';

function ScreenReaderBoot() {
  useScreenReaderAutoFocus();
  return null;
}

function ChatbotTidio() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isDashboard = pathname?.startsWith('/dashboard');
    if (isDashboard && !active) {
      setActive(true);
    } else if (!isDashboard && active) {
      const tidioScript = document.querySelector('script[src*="code.tidio.co"]');
      const tidioIframe = document.querySelector('#tidio-chat');
      if (tidioIframe) tidioIframe.remove();
      if (tidioScript) tidioScript.remove();

      delete window.tidioChatApi;
      delete window.tidioScriptLoaded;

      setActive(false);
    }
  }, [pathname]);

  if (!active) return null;

  return (
    <Script
      src="https://code.tidio.co/gnsiic9k412fulgjkxdmhyv5cio9boyi.js"
      strategy="lazyOnload"
      onLoad={() => {
        console.log(' Tidio cargado correctamente');
      }}
    />
  );
}

export default function RootLayout({ children }) {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [modoGrises, setModoGrises] = useState(false);
  const [modoContraste, setModoContraste] = useState(false);
  const [tamanoTexto, setTamanoTexto] = useState(50);
  const [tipografia, setTipografia] = useState('Inter');

  useEffect(() => {
    setModoOscuro(localStorage.getItem('modoOscuro') === 'true');
    setModoGrises(localStorage.getItem('modoGrises') === 'true');
    setModoContraste(localStorage.getItem('modoContraste') === 'true');
    setTamanoTexto(parseInt(localStorage.getItem('tamanoTexto') || '50'));
    setTipografia(localStorage.getItem('tipografia') || 'Inter');

    const listeners = [
      ['modoOscuroChange', setModoOscuro],
      ['modoGrisesChange', setModoGrises],
      ['modoContrasteChange', setModoContraste],
      ['modoTextoChange', setTamanoTexto],
      ['tipografiaChange', setTipografia],
    ];

    listeners.forEach(([evt, fn]) => {
      window.addEventListener(evt, (e) => fn(e.detail));
    });

    return () => {
      listeners.forEach(([evt, fn]) => {
        window.removeEventListener(evt, fn);
      });
    };
  }, []);

  useEffect(() => {
    if (modoOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('modoOscuro', modoOscuro.toString());
  }, [modoOscuro]);

  useEffect(() => {
    const escala = 0.8 + (tamanoTexto / 100) * 0.7;
    document.documentElement.style.setProperty('--font-scale', `${escala}rem`);
  }, [tamanoTexto]);

  useEffect(() => {
    if (tipografia) {
      document.documentElement.style.setProperty('--font-base', `'${tipografia}', sans-serif`);
      localStorage.setItem('tipografia', tipografia);
    }
  }, [tipografia]);

  useEffect(() => {
    const guardado = localStorage.getItem('modoOscuro');
    if (guardado === null) {
      const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setModoOscuro(prefiereOscuro);
    }
  }, []);

  return (
    <html lang="es">
      <body
        className={`${modoGrises ? 'grayscale' : ''} ${
          modoContraste ? 'contrast' : ''
        } bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300`}
      >
        <SessionProvider>
          <AccessibilityProvider>
            <ScreenReaderBoot />
            {children}
          </AccessibilityProvider>
        </SessionProvider>

        <ChatbotTidio />
      </body>
    </html>
  );
}
