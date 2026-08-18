import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { NavBar } from '../src/components/navbar';
import { LanguageProvider } from '../src/utils/context/language/language.provider';
import type { ConfigUINavBarType } from '../src/types';

const ui: ConfigUINavBarType = {
  about: 'Sobre mí',
  skills: 'Tecnologías',
  projects: 'Proyectos',
  contact: 'Contacto',
  theme: 'Cambiar tema',
};

const renderNavbar = () => render(
  <LanguageProvider>
    <NavBar name="Ivan" lastName="Usheff" ui={ui} />
  </LanguageProvider>,
);

describe('NavBar', () => {
  beforeEach(() => localStorage.clear());

  it('renders initials and navigation links', () => {
    renderNavbar();
    expect(screen.getByText('IU')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Tecnologías' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Proyectos' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Contacto' })).toHaveAttribute('href', '#contact');
  });

  it('switches between light and dark themes and persists the selection', () => {
    renderNavbar();
    const button = screen.getByRole('button', { name: 'Cambiar tema' });

    expect(button).toHaveTextContent('🌙');
    expect(document.body).not.toHaveClass('dark');

    fireEvent.click(button);
    expect(button).toHaveTextContent('☀️');
    expect(document.body).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(button);
    expect(document.body).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('restores dark theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    renderNavbar();

    expect(document.body).toHaveClass('dark');
    expect(screen.getByRole('button', { name: 'Cambiar tema' })).toHaveTextContent('☀️');
  });
});
