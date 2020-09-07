/* Modulos del router de angular */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componentes que van a ser dinámicos */
import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';

/* Definir los path */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'como-ayuda-marcas', component: MarcasComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
