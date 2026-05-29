import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv';
import { PortfolioComponent } from './portfolio/portfolio';

export const routes: Routes = [
  { path: '',          component: CvComponent },
  { path: 'portfolio', component: PortfolioComponent }
];
