import { Routes } from '@angular/router';

// Auth
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

// Home
import { Home } from './platform/home/home';

// Users
import { MyProfile } from './users/my-profile/my-profile';
import { PublicProfile } from './users/public-profile/public-profile';

// Jobs
import { CreateJob } from './jobs/create-job/create-job';
import { MyJobs } from './jobs/my-jobs/my-jobs';
import { JobDetails } from './jobs/job-details/job-details';

// Guard
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'me', component: MyProfile, canActivate: [authGuard] },
  { path: 'users/:username', component: PublicProfile },

  { path: 'jobs/create', component: CreateJob, canActivate: [authGuard] },
  { path: 'jobs/my-postings', component: MyJobs, canActivate: [authGuard] },
  { path: 'jobs/:id', component: JobDetails, canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];