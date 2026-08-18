import { act, renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { LanguageProvider } from '../src/utils/context/language/language.provider';
import { useLanguage } from '../src/utils/context/language/language.hook';

const wrapper = ({ children }: PropsWithChildren) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageProvider', () => {
  beforeEach(() => localStorage.clear());

  it('uses Spanish as default language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('es');
    expect(result.current.config.ui.navbar.about).toBe('Sobre mí');
  });

  it('restores a supported language from localStorage', () => {
    localStorage.setItem('language', 'en');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('en');
    expect(result.current.config.ui.navbar.about).toBe('About me');
  });

  it('falls back to Spanish for an unsupported stored language', () => {
    localStorage.setItem('language', 'xx');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('es');
  });

  it('updates config, localStorage and html lang when language changes', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });

    act(() => result.current.setLanguage('en'));

    expect(result.current.language).toBe('en');
    expect(result.current.config.ui.navbar.contact).toBe('Contact');
    expect(localStorage.getItem('language')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });
});
