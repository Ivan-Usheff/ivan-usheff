import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from '../src/components/about';
import { Contact } from '../src/components/contact';
import { Footer } from '../src/components/footer';
import { Hero } from '../src/components/hero';
import { Projects } from '../src/components/projects';
import { Skills } from '../src/components/skills';

describe('presentation components', () => {
  it('renders About content', () => {
    render(<About description="About description" ui="About me" />);
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument();
    expect(screen.getByText('About description')).toBeInTheDocument();
  });

  it('renders Hero content, actions and CV link', () => {
    render(
      <Hero
        name="Ivan"
        lastName="Usheff"
        role="Developer"
        description="Description"
        cv="Ivan_Usheff_cv.es.pdf"
        links={[{ name: 'GitHub', url: 'https://github.com/example', target: true }]}
        ui={{ subtitle: 'Hola, soy', viewProjects: 'Ver proyectos', downloadCV: 'Descargar CV' }}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Ivan Usheff', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Developer', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver proyectos' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('download', 'Ivan_Usheff_cv.es.pdf');
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('target', '_blank');
  });

  it('renders Skills and optional metadata', () => {
    render(
      <Skills
        ui="Tecnologías"
        skills={[
          { name: 'TypeScript', level: 'Advanced', experience: 5 },
          { name: 'NestJS' },
        ]}
      />,
    );
    expect(screen.getByText(/TypeScript/)).toHaveTextContent('TypeScript (Advanced) (5 años)');
    expect(screen.getByText('NestJS')).toBeInTheDocument();
  });

  it('renders Projects and their links', () => {
    render(
      <Projects
        ui="Proyectos"
        description="My projects"
        projects={[
          {
            type: 'Backend',
            name: 'Config Service',
            description: 'Central config',
            technologies: ['NestJS', 'PostgreSQL'],
            links: [{ name: 'Read more', url: 'https://example.com', target: true }],
          },
        ]}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Config Service' })).toBeInTheDocument();
    expect(screen.getByText('NestJS')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Read more/ })).toHaveAttribute('href', 'https://example.com');
  });

  it('renders Contact links with the correct target behavior', () => {
    render(
      <Contact
        ui="Contacto"
        message="Contact me"
        links={[
          { name: 'Email', url: 'mailto:test@example.com', target: false },
          { name: 'GitHub', url: 'https://github.com/example', target: true },
        ]}
      />,
    );

    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('target', '_self');
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('target', '_blank');
  });

  it('renders the current year in Footer', () => {
    render(<Footer name="Ivan" lastName="Usheff" />);
    expect(screen.getByText(`© ${new Date().getFullYear()} Ivan Usheff`)).toBeInTheDocument();
  });
});
