import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useLanguage } from '../../src/utils/context/language/language.hook';

describe('useLanguage', () => {
  it('throws when used outside LanguageProvider', () => {
    expect(() => renderHook(() => useLanguage())).toThrow(
      'useLanguage debe utilizarse dentro de LanguageProvider',
    );
  });
});
