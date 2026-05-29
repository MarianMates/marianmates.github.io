import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProjectLink {
  label: string;
  href: string;
  type: 'demo' | 'frontend' | 'backend';
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  /** Place screenshots in public/assets/ with this filename */
  image: string;
  /** CSS gradient shown when the image hasn't loaded */
  fallback: string;
  tags: string[];
  privateRepos: boolean;
  links: ProjectLink[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  readonly projects: Project[] = [
    {
      id: 'gym-forged',
      name: 'Gym Forged',
      tagline: 'Built in iron',
      image: 'assets/gym-forged.jpg',
      fallback: 'linear-gradient(135deg, #0d0505 0%, #2a0a0a 50%, #1a0808 100%)',
      tags: ['Fitness', 'Workout Tracker', 'Full-Stack'],
      privateRepos: true,
      links: [
        // NOTE: replace with a public URL once deployed
        { label: 'Demo', href: 'http://192.168.1.143:4300/', type: 'demo' }
      ]
    },
    {
      id: 'athletic-gourmet',
      name: 'Athletic Gourmet',
      tagline: 'Nutrition meets performance',
      image: 'assets/athletic-gourmet.jpg',
      fallback: 'linear-gradient(135deg, #0d0a05 0%, #2a1e08 50%, #1a1005 100%)',
      tags: ['Nutrition', 'Meal Planning', 'Full-Stack'],
      privateRepos: false,
      links: [
        // NOTE: replace with a public URL once deployed
        { label: 'Demo',     href: 'http://192.168.1.143:4200/',                                                  type: 'demo'     },
        { label: 'Frontend', href: 'https://github.com/MarianMates/athletic-gourmet-frontend-application',        type: 'frontend' },
        { label: 'Backend',  href: 'https://github.com/MarianMates/athletic-gourmet-backend-application',         type: 'backend'  }
      ]
    }
  ];

  /** Produces the inline background-image style with a fallback gradient */
  cardBg(project: Project): string {
    return `${project.fallback}, url('${project.image}')`;
  }
}
