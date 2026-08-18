import { describe, expect, it } from 'vitest';
import { LANGUAGE_CONFIG } from '../src/config/languages/languages.config';
import { LANGUAGE_LABELS } from '../src/types';

const configuredKeys = Object.keys(LANGUAGE_LABELS).sort();
const loadedKeys = Object.keys(LANGUAGE_CONFIG).sort();

describe('language configuration', () => {

  it('has one languages.<key>.json file for every LANGUAGE_LABELS key and no undeclared files', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');

    const languageDir = path.resolve(process.cwd(), 'src', 'config', 'languages');
    const fileKeys = fs
      .readdirSync(languageDir)
      .map(file => /^languages\.([^.]+)\.json$/.exec(file)?.[1])
      .filter((key): key is string => Boolean(key))
      .sort();

    expect(fileKeys).toEqual(configuredKeys);
  });
  it('loads exactly the languages declared in LANGUAGE_LABELS', () => {
    expect(loadedKeys).toEqual(configuredKeys);
  });

  it('has one valid configuration per declared language', () => {
    for (const key of configuredKeys) {
      const language = LANGUAGE_CONFIG[key as keyof typeof LANGUAGE_CONFIG];

      expect(language).toBeDefined();
      expect(language?.code).toBe(key);
      expect(language?.label).toBe(
        LANGUAGE_LABELS[key as keyof typeof LANGUAGE_LABELS],
      );
      expect(language?.content).toBeDefined();
    }
  });

  it('does not contain duplicated language codes', () => {
    const codes = Object.values(LANGUAGE_CONFIG).map(language => language.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it('keeps the same UI translation structure for every language', () => {
    const [reference, ...rest] = Object.values(LANGUAGE_CONFIG);
    expect(reference).toBeDefined();

    const getShape = (value: unknown): unknown => {
      if (Array.isArray(value)) return [];
      if (value && typeof value === 'object') {
        return Object.fromEntries(
          Object.entries(value as Record<string, unknown>)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, child]) => [key, getShape(child)]),
        );
      }
      return typeof value;
    };

    const referenceShape = getShape(reference!.content.ui);
    for (const language of rest) {
      expect(getShape(language.content.ui)).toEqual(referenceShape);
    }
  });

  it('references an existing PDF CV for each language', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');

    for (const language of Object.values(LANGUAGE_CONFIG)) {
      const cv = language.content.hero.cv;
      if (!cv) continue;

      const cvPath = path.resolve(process.cwd(), 'public', 'cv', cv);
      expect(fs.existsSync(cvPath), `Missing CV: ${cvPath}`).toBe(true);
    }
  });
});
