import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { MiComercio } from './pages/mi-comercio/mi-comercio';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'register', component: Register },
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard]
  },
  {
    path: 'comercio/registro',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/comercio-registro/comercio-registro')
        .then(m => m.ComercioRegistro)
  },
  {
  path: 'mi-comercio',
  component: MiComercio,
  canActivate: [authGuard]
  },
  {
    path: 'catalogo',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/catalogo/catalogo').then(m => m.Catalogo)
  },
  {
  path: 'forgot-password',
  loadComponent: () =>
    import('./pages/forgot-password/forgot-password')
      .then(m => m.ForgotPassword)
  },
  {
  path: 'reset-password',
  loadComponent: () =>
    import('./pages/reset-password/reset-password')
      .then(m => m.ResetPassword)
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin)
  },
  { path: '**', redirectTo: '' },

];