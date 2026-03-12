import { Routes } from '@angular/router';
import { JobSearchComponent } from './modules/jobs/job-search/job-search';
import { JobDetailsComponent } from './modules/jobs/job-details/job-details';

export const routes: Routes = [
  // Redireciona a página inicial (temporário) direto pro seu módulo de pesquisa
  { path: '', component: JobSearchComponent },
  
  // Rota para o Passo 2: Os detalhes de uma vaga específica
  { path: 'jobs/:id', component: JobDetailsComponent },
  
  // Se digitar algo errado na URL, também cai no seu módulo (temporário)
  { path: '**', redirectTo: '' }
];
