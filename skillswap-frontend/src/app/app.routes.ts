import { Routes } from '@angular/router';
import { JobSearchComponent } from './modules/jobs/job-search/job-search';

export const routes: Routes = [
  // Redireciona a página inicial (temporário) direto pro seu módulo de pesquisa
  { path: '', component: JobSearchComponent },
  // Se digitar algo errado na URL, também cai no seu módulo (temporário)
  { path: '**', redirectTo: '' }
];
